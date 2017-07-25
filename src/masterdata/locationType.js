const LOCATION_MAP = {
    'Aidenbachstraße': ['AIDENBACHSTRASSE'],
    'Alte Heide': ['ALTE HEIDE'],
    'Am Hart': ['AM HART'],
    'Am Knie': ['AM KNIE'],
    'Arabellapark': ['ARABELLAPARK'],
    'Basler Straße': ['BASLER STRASSE'],
    'Bonner Platz': ['BONNER PLATZ'],
    'Brudermühlstraße': ['BRUDERMÜHLSTRASSE'],
    'Candidplatz': ['CANDIDPLATZ'],
    'Cosimapark': ['COSIMAPARK'],
    'Dietlindenstraße': ['DIETLINDENSTRASSE'],
    'Dülferstraße': ['DÜLFERSTRASSE'],
    'Englschalking': ['ENGLSCHALKING'],
    'Feldmoching': ['FELDMOCHING'],
    'Fideliopark': ['FIDELIOPARK'],
    'Forstenrieder Allee': ['FORSTENRIEDER ALLEE'],
    'Frankfurter Ring': ['FRANKFURTER RING'],
    'Fraunhoferstraße': ['FRAUNHOFERSTRASSE'],
    'Freimann': ['FREIMANN'],
    'Friedenheimer Straße': ['FRIEDENHEIMER STRASSE'],
    'Fröttmaning': ['FRÖTTMANING'],
    'Fürstenried West': ['FÜRSTENRIED WEST'],
    'Garching': ['GARCHING'],
    'Garching-Forschungszentrum': ['GARCHING-FORSCHUNGSZENTRUM'],
    'Garching-Hochbrück': ['GARCHING-HOCHBRÜCK', 'GARCHING HOCHBRÜCK'],
    'Georg-Brauchle-Ring': ['GEORG-BRAUCHLE-RING', 'GEORG BRAUCHLE RING'],
    'Gern': ['GERN'],
    'Giesing': ['GIESING'],
    'Giselastraße': ['GISELASTRASSE', 'GISELA STRASSE'],
    'Goetheplatz': ['GOETHEPLATZ', 'GOETHE PLATZ'],
    'Großhadern': ['GROSSHADERN'],
    'Haderner Stern': ['HADERNER STERN'],
    'Harras': ['HARRAS'],
    'Harthof': ['HARTHOF'],
    'Hasenbergl': ['HASENBERGL'],
    'Hauptbahnhof': ['HAUPTBAHNHOF'],
    'Heimeranplatz': ['HEIMERANPLATZ'],
    'Hohenzollernplatz': ['HOHENZOLLERNPLATZ'],
    'Holzapfelkreuth': ['HOLZAPFELKREUTH', 'HOLZ APFEL KREUTH'],
    'Implerstraße': ['IMPLERSTRASSE'],
    'Innsbrucker Ring': ['INNSBRUCKER RING'],
    'Josephsburg': ['JOSEPHSBURG', 'JOSEPHS BURG'],
    'Josephsplatz': ['JOSEPHSPLATZ', 'JOSEPHS PLATZ'],
    'Karl-Preis-Platz': ['KARL-PREIS-PLATZ', 'KARL PREIS PLATZ'],
    'Karlsplatz': ['KARLSPLATZ'],
    'Kieferngarten': ['KIEFERNGARTEN'],
    'Klinikum Großhadern': ['KLINIKUM GROSSHADERN'],
    'Kolumbusplatz': ['KOLUMBUSPLATZ'],
    'Konigsplatz': ['KONIGSPLATZ'],
    'Kreillerstraße': ['KREILLERSTRASSE'],
    'Laimer Platz': ['LAIMER PLATZ'],
    'Lehel': ['LEHEL'],
    'Machtlfinger Straße': ['MACHTLFINGER STRASSE'],
    'Maillingerstraße': ['MAILLINGERSTRASSE'],
    'Mangfallplatz': ['MANGFALLPLATZ'],
    'Marienplatz': ['MARIENPLATZ', 'MARIENHOF'],
    'Martinsried': ['MARTINSRIED'],
    'Max-Weber-Platz': ['MAX-WEBER-PLATZ'],
    'Messestadt Ost': ['MESSESTADT OST'],
    'Messestadt West': ['MESSESTADT WEST'],
    'Michaelibad': ['MICHAELIBAD'],
    'Milbertshofen': ['MILBERTSHOFEN'],
    'Moosach': ['MOOSACH'],
    'Moosacher St.-Martins-Platz': ['MOOSACHER ST.-MARTINS-PLATZ'],
    'Moosfeld': ['MOOSFELD'],
    'Münchner Freiheit': ['MÜNCHNER FREIHEIT'],
    'Neuperlach Süd': ['NEUPERLACH SÜD'],
    'Neuperlach Zentrum': ['NEUPERLACH ZENTRUM'],
    'Nordfriedhof': ['NORDFRIEDHOF'],
    'Obersendling': ['OBERSENDLING'],
    'Oberwiesenfeld': ['OBERWIESENFELD'],
    'Odeonsplatz': ['ODEONSPLATZ'],
    'Olympia-Einkaufszentrum': ['OLYMPIA-EINKAUFSZENTRUM'],
    'Olympiazentrum': ['OLYMPIAZENTRUM'],
    'Ostbahnhof': ['OSTBAHNHOF'],
    'Partnachplatz': ['PARTNACHPLATZ'],
    'Pasing': ['PASING'],
    'Petuelring': ['PETUELRING'],
    'Poccistraße': ['POCCISTRASSE'],
    'Prinzregentenplatz': ['PRINZREGENTENPLATZ'],
    'Quiddestraße': ['QUIDDESTRASSE'],
    'Richard-Strauss-Straße': ['RICHARD-STRAUSS-STRASSE'],
    'Rotkreuzplatz': ['ROTKREUZPLATZ'],
    'Scheidplatz': ['SCHEIDPLATZ'],
    'Schwanthalerhöhe': ['SCHWANTHALERHÖHE'],
    'Sendlinger Tor': ['SENDLINGER TOR'],
    'Silberhornstraße': ['SILBERHORNSTRASSE'],
    'St.-Quirin-Platz': ['ST.-QUIRIN-PLATZ'],
    'Stiglmaierplatz': ['STIGLMAIERPLATZ'],
    'Studentenstadt': ['STUDENTENSTADT'],
    'Thalkirchen': ['THALKIRCHEN'],
    'Therese-Giehse-Allee': ['THERESE-GIEHSE-ALLEE'],
    'Theresienstraße': ['THERESIENSTRASSE'],
    'Theresienwiese': ['THERESIENWIESE'],
    'Trudering': ['TRUDERING'],
    'Universität': ['UNIVERSITÄT'],
    'Untersbergstraße': ['UNTERSBERGSTRASSE'],
    'Westendstraße': ['WESTENDSTRASSE'],
    'Westfriedhof': ['WESTFRIEDHOF'],
    'Westpark': ['WESTPARK'],
    'Wettersteinplatz': ['WETTERSTEINPLATZ'],
    'Willibaldstraße': ['WILLIBALDSTRASSE'],
    'Allach': ['ALLACH'],
    'Altenerding': ['ALTENERDING'],
    'Altomünster': ['ALTOMÜNSTER'],
    'Arnbach': ['ARNBACH'],
    'Aubing': ['AUBING'],
    'Aufhausen': ['AUFHAUSEN'],
    'Aying': ['AYING'],
    'Bachern': ['BACHERN'],
    'Baierbrunn': ['BAIERBRUNN'],
    'Baldham': ['BALDHAM'],
    'Berg am Laim': ['BERG AM LAIM', 'BERG AM NEIN', 'BERG AM LEIM'],
    'Buchenau': ['BUCHENAU'],
    'Buchenhain': ['BUCHENHAIN'],
    'Dachau': ['DACHAU'],
    'Dachau Stadt': ['DACHAU STADT'],
    'Daglfing': ['DAGLFING'],
    'Deisenhofen': ['DEISENHOFEN'],
    'Donnersbergerbrücke': ['DONNERSBERGERBRÜCKE', 'DONNERSBERGER'],
    'Dürrnhaar': ['DÜRRNHAAR'],
    'Ebenhausen-Schäftlarn': ['EBENHAUSEN-SCHÄFTLARN'],
    'Ebersberg': ['EBERSBERG'],
    'Eching': ['ECHING'],
    'Eglharting': ['EGLHARTING'],
    'Eichenau': ['EICHENAU'],
    'Erding': ['ERDING'],
    'Erding-Fliegerhorst': ['ERDING-FLIEGERHORST'],
    'Erdweg': ['ERDWEG'],
    'Esting': ['ESTING'],
    'Fasanenpark': ['FASANENPARK'],
    'Fasanerie': ['FASANERIE'],
    'Fasangarten': ['FASANGARTEN'],
    'Feldafing': ['FELDAFING'],
    'Feldkirchen': ['FELDKIRCHEN'],
    'Flughafen Besucherpark': ['FLUGHAFEN BESUCHERPARK'],
    'Flughafen München': ['FLUGHAFEN MÜNCHEN'],
    'Freiham': ['FREIHAM'],
    'Freising': ['FREISING'],
    'Fürstenfeldbruck': ['FÜRSTENFELDBRUCK'],
    'Furth': ['FURTH'],
    'Gauting': ['GAUTING'],
    'Geisenbrunn': ['GEISENBRUNN'],
    'Geltendorf': ['GELTENDORF'],
    'Gelting': ['GELTING'],
    'Geretsried Mitte': ['GERETSRIED MITTE'],
    'Geretsried Süd': ['GERETSRIED SÜD'],
    'Germering-Unterpfaffenhofen': ['GERMERING-UNTERPFAFFENHOFEN'],
    'Gernlinden': ['GERNLINDEN'],
    'Gilching-Argelsried': ['GILCHING-ARGELSRIED'],
    'Gräfelfing': ['GRÄFELFING'],
    'Grafing Bahnhof': ['GRAFING BAHNHOF'],
    'Grafing Stadt': ['GRAFING STADT'],
    'Grafrath': ['GRAFRATH'],
    'Gröbenzell': ['GRÖBENZELL'],
    'Gronsdorf': ['GRONSDORF'],
    'Großhelfendorf': ['GROSSHELFENDORF'],
    'Großhesselohe': ['GROSSHESSELOHE'],
    'Großhesselohe Isartalbahnhof': ['GROSSHESSELOHE ISARTALBAHNHOF'],
    'Grub': ['GRUB'],
    'Haar': ['HAAR'],
    'Hackerbrücke': ['HACKERBRÜCKE', 'HACKER'],
    'Hallbergmoos': ['HALLBERGMOOS'],
    'Harthaus': ['HARTHAUS'],
    'Hauptbahnhof – Holzkirchner Bf.': ['HAUPTBAHNHOF – HOLZKIRCHNER BF.'],
    'Hauptbahnhof – Starnberger Bf.': ['HAUPTBAHNHOF – STARNBERGER BF.'],
    'Hebertshausen': ['HEBERTSHAUSEN'],
    'Heimstetten': ['HEIMSTETTEN'],
    'Herrsching': ['HERRSCHING'],
    'Hirschgarten': ['HIRSCHGARTEN'],
    'Hohenbrunn': ['HOHENBRUNN'],
    'Höhenkirchen-Siegertsbrunn': ['HÖHENKIRCHEN-SIEGERTSBRUNN'],
    'Hohenschäftlarn': ['HOHENSCHÄFTLARN'],
    'Höllriegelskreuth': ['HÖLLRIEGELSKREUTH'],
    'Holzkirchen': ['HOLZKIRCHEN'],
    'Icking': ['ICKING'],
    'Isartor': ['ISARTOR'],
    'Ismaning': ['ISMANING'],
    'Johanneskirchen': ['JOHANNESKIRCHEN'],
    'Karlsfeld': ['KARLSFELD'],
    'Kirchseeon': ['KIRCHSEEON'],
    'Kleinberghofen': ['KLEINBERGHOFEN'],
    'Kreuzstraße': ['KREUZSTRASSE'],
    'Laim': ['LAIM', 'NEIN', 'LEIM'],
    'Langwied': ['LANGWIED'],
    'Leienfelsstraße': ['LEIENFELSSTRASSE'],
    'Leuchtenbergring': ['LEUCHTENBERGRING'],
    'Lochham': ['LOCHHAM'],
    'Lochhausen': ['LOCHHAUSEN'],
    'Lohhof': ['LOHHOF'],
    'Maisach': ['MAISACH'],
    'Malching': ['MALCHING'],
    'Mammendorf': ['MAMMENDORF'],
    'Markt Indersdorf': ['MARKT INDERSDORF'],
    'Markt Schwaben': ['MARKT SCHWABEN'],
    'Menterschwaige': ['MENTERSCHWAIGE'],
    'Mittersendling': ['MITTERSENDLING'],
    'Mühltal': ['MÜHLTAL'],
    'Neuaubing': ['NEUAUBING'],
    'Neubiberg': ['NEUBIBERG'],
    'Neufahrn': ['NEUFAHRN'],
    'Neugilching': ['NEUGILCHING'],
    'Niederroth': ['NIEDERROTH'],
    'Obermenzing': ['OBERMENZING'],
    'Oberschleißheim': ['OBERSCHLEISSHEIM'],
    'Olching': ['OLCHING'],
    'Olympiastadion': ['OLYMPIASTADION'],
    'Ottenhofen': ['OTTENHOFEN'],
    'Otterfing': ['OTTERFING'],
    'Ottobrunn': ['OTTOBRUNN'],
    'Peiß': ['PEISS'],
    'Perlach': ['PERLACH'],
    'Petershausen': ['PETERSHAUSEN'],
    'Planegg': ['PLANEGG'],
    'Poing': ['POING'],
    'Possenhofen': ['POSSENHOFEN'],
    'Puchheim': ['PUCHHEIM'],
    'Pullach': ['PULLACH'],
    'Pulling': ['PULLING'],
    'Riem': ['RIEM'],
    'Röhrmoos': ['RÖHRMOOS'],
    'Rosenheimer Platz': ['ROSENHEIMER PLATZ'],
    'Sauerlach': ['SAUERLACH'],
    'Schöngeising': ['SCHÖNGEISING'],
    'Schwabhausen': ['SCHWABHAUSEN'],
    'Schwaigerloh': ['SCHWAIGERLOH'],
    'Seefeld-Hechendorf': ['SEEFELD-HECHENDORF'],
    'Siemenswerke': ['SIEMENSWERKE', 'SIEBEN ZWERGE'],
    'Solln': ['SOLLN'],
    'Starnberg': ['STARNBERG'],
    'Starnberg Nord': ['STARNBERG NORD'],
    'Steinebach': ['STEINEBACH'],
    'St. Koloman': ['ST. KOLOMAN'],
    'St.-Martin-Straße': ['ST.-MARTIN-STRASSE'],
    'Stockdorf': ['STOCKDORF'],
    'Taufkirchen': ['TAUFKIRCHEN'],
    'Türkenfeld': ['TÜRKENFELD'],
    'Tutzing': ['TUTZING'],
    'Unterföhring': ['UNTERFÖHRING'],
    'Unterhaching': ['UNTERHACHING'],
    'Untermenzing': ['UNTERMENZING'],
    'Unterschleißheim': ['UNTERSCHLEISSHEIM'],
    'Vaterstetten': ['VATERSTETTEN'],
    'Vierkirchen-Esterhofen': ['VIERKIRCHEN-ESTERHOFEN', 'VIERKIRCHENESTERHOFEN'],
    'Wächterhof': ['WÄCHTERHOF'],
    'Weßling': ['WESSLING'],
    'Westkreuz': ['WESTKREUZ'],
    'Wolfratshausen': ['WOLFRATSHAUSEN'],
    'Zorneding': ['ZORNEDING'],
};

/**
 * Get the real location for the given location name or a synonym.
 *
 * @param locationOrSynonym {string}
 */
function getLocation(locationOrSynonym) {
    locationOrSynonym = locationOrSynonym.toUpperCase();
    const locationOrSynonymOnlyLetters = locationOrSynonym.replace(/[^a-zäöüß]/gi, '');
    for (const location in LOCATION_MAP) {
        const knownNames = LOCATION_MAP[location];
        if (knownNames.indexOf(locationOrSynonym) >= 0 || knownNames.indexOf(locationOrSynonymOnlyLetters) >= 0) {
            return location;
        }
    }
    return null;
}

module.exports = {
    getLocation,
};
