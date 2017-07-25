const encoding = require('encoding');
const cheerio = require('cheerio');
const querystring = require('querystring');
const transportType = require('../masterdata/transportType');
const req = require('../util/req');

function loadNextDepartures(location, transports, lines) {
    if (!transports) {
        transports = transportType.ALL_TRANSPORTS;
    }
    if (lines) {
        lines = lines.map(l => l.toUpperCase());
    }

    const queryData = {};
    transports.forEach(t => queryData[t] = 'checked');
    let query = querystring.stringify(queryData);
    if (transports.length) {
        query += '&';
    }
    query += 'haltestelle=' + encoding.convert(location, 'Latin1').toString('Latin1');

    return req
        .getResponse({
            protocol: 'https:',
            hostname: 'www.mvg-live.de',
            path: `/ims/dfiStaticAuswahl.svc?${query}`,
            headers: {
                'Content-Type': 'text/html; charset=UTF-8',
            },
        })
        .then(data => encoding.convert(data, 'UTF-8', 'Latin1').toString())
        .then(converted => {
            const $ = cheerio.load(converted);

            const lineInfo = [];
            $('table.departureTable.departureView tr:not(:first-child)').filter('.rowOdd,.rowEven').each(function () {
                const tr = $(this);
                lineInfo.push(tr.text().replace(/\s+/g, ' ').trim());
            });

            return lineInfo
                .map(l => {
                    const first = l.indexOf(' ');
                    const last = l.lastIndexOf(' ');

                    const line = l.substr(0, first);
                    const minutes = Number(l.substr(last + 1));
                    const destination = l.substring(first + 1, last);
                    const type = getTransportTypeFromLine(line);

                    return {line, type, destination, minutes};
                })
                .filter(({line}) => {
                    return !lines || !lines.length || lines.indexOf(line) >= 0;
                });
        });
}

function getTransportTypeFromLine(line) {
    if (line.startsWith('S')) {
        return transportType.TRANSPORT_SBAHN;
    } else if (line.startsWith('U')) {
        return transportType.TRANSPORT_UBAHN;
    } else if (line.startsWith('X') || line.startsWith('N')) {
        return transportType.TRANSPORT_BUS;
    } else {
        try {
            const lineNum = Number(line);
            return lineNum < 50 ? transportType.TRANSPORT_TRAM : transportType.TRANSPORT_BUS;
        } catch (e) {
            console.error('unknown line:', lineNum);
            throw e;
        }
    }
}

module.exports = {
    loadNextDepartures,
};
