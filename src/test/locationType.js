const locationType = require('../masterdata/locationType');

let loc = locationType.getLocation('Hackerbrücke');
console.assert(loc === 'Hackerbrücke', 'Plain Hackerbrücke does not work');
loc = locationType.getLocation('Hacker');
console.assert(loc === 'Hackerbrücke', 'Hacker does not resolve to Hackerbrücke');
