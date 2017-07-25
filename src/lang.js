const transportType = require('./masterdata/transportType');

const messages = {
    'de': {
        translation: {
            [transportType.TRANSPORT_SBAHN]: 'S-Bahn',
            [transportType.TRANSPORT_UBAHN]: 'U-Bahn',
            [transportType.TRANSPORT_BUS]: 'Bus',
            [transportType.TRANSPORT_TRAM]: 'Tram',
            [transportType.TRANSPORT_SBAHN + '_pl']: 'S-Bahnen',
            [transportType.TRANSPORT_UBAHN + '_pl']: 'U-Bahnen',
            [transportType.TRANSPORT_BUS + '_pl']: 'Busse',
            [transportType.TRANSPORT_TRAM + '_pl']: 'Trams',

            SKILL_NAME: 'Münchner Nahverkehr',
            NO_DEPARTURE_FOUND: 'Es fährt demnächste leider keine {0} ab {1}. ',
            NEXT_X_DEPARTURES_FROM: 'Das sind die {0} nächsten {1} ab {2}: ',
            NEXT_DEPARTURE_DETAIL: '{0} {1} nach {2} in {3} Minuten. ',
            NEXT_LINE_FROM_LOCATION: 'Die nächste {0} ab {1} ist die {2} nach {3} in {4} Minuten. ',
            ANOTHER_LINE_FROM_LOCATION: 'Danach kommt die {0} nach {1} in {2} Minuten. ',

            UNKNOWN_LOCATION: 'Ich kenne die Station {0} leider nicht. ',
            UNKNOWN_TRANSPORT: 'Leider habe ich nicht verstanden, welches Verkehrsmittel du meinst.',
            UNKNOWN_LINE: 'Ich kenne die Linie {0} {1} leider nicht. ',

            WELCOME_MESSAGE: 'Servus! ',
            HELP_MESSAGE: 'Du kannst sagen, "Wann fährt am Marienplatz die nächste U6" oder "Was sind die nächsten S-Bahnen am Marienplatz", oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen? ',
            STOP_MESSAGE: 'Servus, bis zum nächsten Mal! ',
        },
    },
};

function getMessage(message, ...params) {
    params && params.forEach((p, i) => {
        message = message.replace(`{${i}}`, p);
    });
    return message;
}

module.exports = {
    messages,
    getMessage,
};
