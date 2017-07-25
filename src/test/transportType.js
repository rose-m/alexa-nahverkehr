const transportType = require('../masterdata/transportType');

let transport = transportType.getTransport('sbahn');
console.assert(transport === transportType.TRANSPORT_SBAHN);
transport = transportType.getTransport('s-bahn');
console.assert(transport === transportType.TRANSPORT_SBAHN);
