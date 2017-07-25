const https = require('https');

function getResponse(requestOptions) {
    return new Promise((resolve, reject) => {
        const req = https.get(requestOptions);
        req.on('response', (res) => {
            if (res.statusCode !== 200) {
                res.resume();
                reject(res);
            }

            // res.setEncoding('utf8');
            let rawData = Buffer.from([]);
            res.on('data', (chunk) => {
                rawData = Buffer.concat([rawData, chunk]);
            });
            res.on('end', () => {
                resolve(rawData);
            });
        });
        req.on('error', reject);
    });
}

exports.getResponse = getResponse;
