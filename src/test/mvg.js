const transportType = require('../masterdata/transportType');
const mvg = require('../mvg');

mvg.loadNextDepartures('Siemenswerke', [transportType.TRANSPORT_SBAHN], ['S7'])
    .then(console.log);
