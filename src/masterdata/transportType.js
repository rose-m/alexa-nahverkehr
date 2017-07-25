const TRANSPORT_SBAHN = 'sbahn';
const TRANSPORT_UBAHN = 'ubahn';
const TRANSPORT_BUS = 'bus';
const TRANSPORT_TRAM = 'tram';
const ALL_TRANSPORTS = [TRANSPORT_SBAHN, TRANSPORT_UBAHN, TRANSPORT_BUS, TRANSPORT_TRAM];


const TRANSPORT_MAP = {
    [TRANSPORT_SBAHN]: ['S', 'SBAHN', 'S-BAHN', 'S BAHN', 'SBAHNEN', 'S-BAHNEN', 'S BAHNEN', 'S BAHN IN'],
    [TRANSPORT_UBAHN]: ['U', 'UBAHN', 'U-BAHN', 'U BAHN', 'UBAHNEN', 'U-BAHNEN', 'U BAHNEN', 'U BAHN IN'],
    [TRANSPORT_BUS]: ['BUS'],
    [TRANSPORT_TRAM]: ['TRAM'],
};

/**
 *
 * @param transportOrSynonym {string}
 * @return {string|null}
 */
function getTransport(transportOrSynonym) {
    transportOrSynonym = transportOrSynonym.toUpperCase();
    for (const transport in TRANSPORT_MAP) {
        const knownNames = TRANSPORT_MAP[transport];
        if (knownNames.indexOf(transportOrSynonym) >= 0) {
            return transport;
        }
    }
    return null;
}

module.exports = {
    getTransport,
    TRANSPORT_SBAHN,
    TRANSPORT_UBAHN,
    TRANSPORT_BUS,
    TRANSPORT_TRAM,
    ALL_TRANSPORTS,
};
