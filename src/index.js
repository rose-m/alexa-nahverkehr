/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const lang = require('./lang');

const locationType = require('./masterdata/locationType');
const transportType = require('./masterdata/transportType');
const lines = require('./masterdata/lines');
const mvg = require('./mvg');

const APP_ID = 'amzn1.ask.skill.b81840d2-35b9-4499-bb44-db615095918b';

const handlers = {
    'LaunchRequest': function () {
        const output = this.t('WELCOME_MESSAGE') + this.t('HELP_MESSAGE');
        this.emit(':ask', output);
    },
    'NextDeparturesIntent': function () {
        console.log(this.event.request.intent.slots);
        const transport = this.event.request.intent.slots.transportType.value;
        const location = this.event.request.intent.slots.location.value;

        const realTransport = transport && transportType.getTransport(transport);
        const realLocation = location && locationType.getLocation(location);

        if (!realLocation || !realTransport) {
            console.error(this.event.request.intent.slots);
            console.error('realLocation', realLocation, 'realTransport', realTransport);
            let output;
            if (!realLocation) {
                output = lang.getMessage(this.t('UNKNOWN_LOCATION'), location);
            } else if (!realTransport) {
                output = this.t('UNKNOWN_TRANSPORT');
            }
            output ? this.emit(':tell', output, this.t('HELP_REPROMPT')) : this.emit('AMAZON.HelpIntent');
            return;
        }

        mvg
            .loadNextDepartures(realLocation, [realTransport])
            .then(lineData => {
                if (!lineData.length) {
                    this.emit(':tell', lang.getMessage(this.t('NO_DEPARTURE_FOUND'), realTransport, realLocation), this.t('HELP_REPROMPT'));
                } else {
                    const max = Math.min(5, lineData.length);
                    let output = lang.getMessage(this.t('NEXT_X_DEPARTURES_FROM'), max, this.t(realTransport + '_pl'), realLocation);
                    for (let i = 0; i < max; i++) {
                        const data = lineData[i];
                        output += lang.getMessage(this.t('NEXT_DEPARTURE_DETAIL'), this.t(data.type), data.line, data.destination, data.minutes);
                    }
                    this.emit(':tell', output, this.t('HELP_REPROMPT'));
                }
            }, function () {
                console.error(arguments);
            });
    },
    'NextLineDepartureIntent': function () {
        console.log(this.event.request.intent.slots);
        const location = this.event.request.intent.slots.location.value;
        const lineType = this.event.request.intent.slots.lineType.value;
        const lineNumber = this.event.request.intent.slots.line.value;
        const line = lines.normalizeLine(lineType, lineNumber);

        const realLocation = location && locationType.getLocation(location);
        const transport = line && lines.getTransportForLine(line);

        if (!realLocation || !line || !transport) {
            console.error(this.event.request.intent.slots);
            console.error('realLocation', realLocation, 'line', line, 'transport', transport);

            const maybeTransport = transportType.getTransport(lineType);
            if (realLocation && maybeTransport) {
                this.event.request.intent.slots.transportType = {
                    name: 'transportType',
                    value: maybeTransport,
                };
                this.emitWithState('NextDeparturesIntent');
                return;
            }

            let output;
            if (!realLocation) {
                output = lang.getMessage(this.t('UNKNOWN_LOCATION'), location);
            } else if (!line) {
                output = lang.getMessage(this.t('UNKNOWN_LINE'), lineType, lineNumber);
            } else if (!transport) {
                output = this.t('UNKNOWN_TRANSPORT');
            }
            output ? this.emit(':tell', output, this.t('HELP_REPROMPT')) : this.emit('AMAZON.HelpIntent');
            return;
        }

        mvg
            .loadNextDepartures(realLocation, [transport], [line])
            .then(lineData => {
                if (!lineData.length) {
                    this.emit(':tell', lang.getMessage(this.t('NO_DEPARTURE_FOUND'), line, realLocation), this.t('HELP_REPROMPT'));
                } else {
                    let data = lineData[0];
                    let output = lang.getMessage(this.t('NEXT_LINE_FROM_LOCATION'), line, realLocation, data.line, data.destination, data.minutes);

                    if (lineData.length > 1) {
                        data = lineData[1];
                        output += lang.getMessage(this.t('ANOTHER_LINE_FROM_LOCATION'), data.line, data.destination, data.minutes);
                    }

                    this.emit(':tell', output, this.t('HELP_REPROMPT'));
                }
            }, function () {
                console.error(arguments);
            });
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_REPROMPT');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'Unhandled': function () {
        this.emit('AMAZON.HelpIntent');
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.resources = lang.messages;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

