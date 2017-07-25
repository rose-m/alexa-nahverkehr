const transportType = require('./transportType');

const LINES = {
    // S-Bahnen
    'S1': transportType.TRANSPORT_SBAHN,
    'S2': transportType.TRANSPORT_SBAHN,
    'S3': transportType.TRANSPORT_SBAHN,
    'S4': transportType.TRANSPORT_SBAHN,
    'S6': transportType.TRANSPORT_SBAHN,
    'S7': transportType.TRANSPORT_SBAHN,
    'S8': transportType.TRANSPORT_SBAHN,
    'S20': transportType.TRANSPORT_SBAHN,

    // U-Bahnen
    'U1': transportType.TRANSPORT_UBAHN,
    'U2': transportType.TRANSPORT_UBAHN,
    'U3': transportType.TRANSPORT_UBAHN,
    'U4': transportType.TRANSPORT_UBAHN,
    'U5': transportType.TRANSPORT_UBAHN,
    'U6': transportType.TRANSPORT_UBAHN,
    'U7': transportType.TRANSPORT_UBAHN,
    'U8': transportType.TRANSPORT_UBAHN,
};

function normalizeLine(lineType, line) {
    if (!lineType || !line) {
        return null;
    }

    const normalized = lineType.replace(/[^us]/gi, '').toUpperCase() + line;
    if (LINES[normalized]) {
        return normalized;
    } else {
        return null;
    }
}

function getTransportForLine(line) {
    const type = LINES[line];
    if (!type) {
        throw Error('unknown line: ' + line);
    }
    return type;
}

module.exports = {
    normalizeLine,
    getTransportForLine,
};
