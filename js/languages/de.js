// Deutsches Sprachmodul fuer Galgje (Hangman)
// Registriert sich selbst unter window.GALGJE_LANG, damit spaeter weitere
// Sprachen hinzugefuegt werden koennen, ohne die Spiellogik zu aendern.
window.GALGJE_LANG = window.GALGJE_LANG || {};

window.GALGJE_LANG.de = {
  code: "de",
  name: "Deutsch",
  flag: "🇩🇪",
  minLength: 8,
  // Enthaelt zusaetzlich Ä, Ö, Ü fuer das deutsche Alphabet.
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ".split(""),
  // Alle Woerter haben mindestens 8 Buchstaben (Grossbuchstaben).
  words: [
    "FEUERWEHR", "FLUGHAFEN", "KRANKENHAUS", "REGENSCHIRM", "SCHOKOLADE",
    "FAHRRADWEG", "GLÜHBIRNE", "SCHREIBTISCH", "FERNSEHER", "KOPFHÖRER",
    "SONNENBLUME", "WOLKENKRATZER", "SCHMETTERLING", "ELEFANTEN", "KRANKENWAGEN",
    "HANDSCHUHE", "RUCKSACK", "TASCHENLAMPE", "WASSERFALL", "APFELSINE",
    "ERDBEEREN", "WASSERMELONE", "KÜHLSCHRANK", "BRIEFTASCHE", "FENSTERBANK",
    "TURNSCHUHE", "REGENBOGEN", "SCHILDKRÖTE", "GEBURTSTAG", "LUFTBALLON",
    "SPIELPLATZ", "KLASSENZIMMER", "BUCHSTABE", "ZAHNBÜRSTE", "WOHNZIMMER",
    "SCHLAFZIMMER", "BADEZIMMER", "ARBEITSZIMMER", "KINDERZIMMER", "ESSZIMMER",
    "GARTENZAUN", "BRIEFKASTEN", "FAHRSTUHL", "TREPPENHAUS", "DACHBODEN",
    "KELLERRAUM", "WASCHMASCHINE", "GESCHIRRSPÜLER", "STAUBSAUGER", "BÜGELEISEN",
    "KAFFEEMASCHINE", "WASSERKOCHER", "BROTKASTEN", "GEFRIERSCHRANK", "MIKROWELLE",
    "HERDPLATTE", "SPÜLBECKEN", "COUCHTISCH", "SCHREIBWAREN", "FÜLLFEDER",
    "RADIERGUMMI", "SCHULRANZEN", "TURNHALLE", "SPORTPLATZ", "SPIELFELD",
    "BASKETBALL", "SCHWIMMBAD", "TENNISPLATZ", "FAHRRADHELM", "MOTORRAD",
    "FLUGZEUG", "HUBSCHRAUBER", "EISENBAHN", "SEILBAHN", "BUSHALTESTELLE",
    "VERKEHRSAMPEL", "ZEBRASTREIFEN", "AUTOBAHN", "PARKPLATZ", "TANKSTELLE",
    "WERKSTATT", "FEUERWERK", "WEIHNACHTSBAUM", "WEIHNACHTSMANN", "OSTERHASE",
    "OSTEREIER", "GEBURTSTAGSFEIER", "SONNENSCHEIN", "REGENWOLKE", "GEWITTERWOLKE",
    "SCHNEEFLOCKE", "SCHNEEMANN", "EISZAPFEN", "WINTERMANTEL", "SOMMERFERIEN",
    "STRANDKORB", "SONNENBRILLE", "BADEHOSE", "SCHWIMMFLOSSEN", "TAUCHERBRILLE",
    "SEGELBOOT", "RUDERBOOT", "FISCHERBOOT", "LEUCHTTURM", "HAFENSTADT",
    "SEEPFERDCHEN", "KORALLENRIFF", "SEESTERN", "WANDERWEG", "BERGSTEIGER",
    "KLETTERWAND", "WANDERSTIEFEL", "SCHLAFSACK", "ZELTPLATZ", "LAGERFEUER",
    "TASCHENMESSER", "LANDKARTE", "WELTKARTE", "FERNROHR", "STERNBILD",
    "MONDLANDUNG", "RAUMSCHIFF", "WELTRAUM", "SATELLIT", "BÜCHEREI",
    "BIBLIOTHEK", "LEHRERZIMMER", "PAUSENHOF", "HAUSAUFGABEN", "STUNDENPLAN",
    "MATHEMATIK", "GEOGRAFIE"
  ],
  ui: {
    pageTitle: "Galgenmännchen",
    heading: "Galgenmännchen",
    languageLabel: "Sprache",
    statusPlaying: "Errate das Wort Buchstabe für Buchstabe.",
    statusWin: "Gewonnen! Das Wort war {word}.",
    statusLose: "Leider verloren! Das Wort war {word}.",
    wrongCountLabel: "Falsche Versuche",
    remainingLabel: "Verbleibende Versuche",
    newGameButton: "Neues Spiel",
    footerNote: "Wörter haben mindestens 8 Buchstaben."
  }
};
