// Modulo de idioma espanol para Galgje (Ahorcado)
// Se registra en window.GALGJE_LANG para que se puedan anadir mas idiomas
// en el futuro sin modificar la logica principal del juego.
window.GALGJE_LANG = window.GALGJE_LANG || {};

window.GALGJE_LANG.es = {
  code: "es",
  name: "Español",
  flag: "🇪🇸",
  minLength: 8,
  // Incluye la Ñ, propia del alfabeto espanol.
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZÑ".split(""),
  // Todas las palabras tienen al menos 8 letras, en mayúsculas.
  words: [
    "ELEFANTE", "MARIPOSA", "COMPUTADORA", "ZAPATILLA", "BICICLETA",
    "ALMOHADA", "ESCALERA", "PARAGUAS", "CALCETIN", "ZANAHORIA",
    "COCODRILO", "ELEFANTES", "MURCIELAGO", "CANGREJO", "MARIPOSAS",
    "ESCRITORIO", "VENTANAL", "ALFOMBRA", "BALONCESTO", "FUTBOLISTA",
    "ESTUDIANTE", "BIBLIOTECA", "COMPAÑERO", "CUMPLEAÑOS", "CHOCOLATE",
    "TELEVISOR", "REFRIGERADOR", "DORMITORIO", "ZAPATERIA", "ESTANTERIA",
    "VENTILADOR", "SOMBRILLA", "CALENDARIO", "MANTEQUILLA", "MANZANAS",
    "NARANJAS", "ORDENADOR", "TELEFONO", "CAMISETA", "PANTALON",
    "CHAQUETA", "SOMBRERO", "CINTURON", "MOCHILAS", "CALCETINES",
    "CORTINAS", "ALMOHADAS", "COLCHONES", "LAMPARAS", "CEPILLOS",
    "TOALLERO", "EQUIPAJE", "PASAPORTE", "AEROPUERTO", "ESTACION",
    "CARRETERA", "SEMAFORO", "BICICLETAS", "MOTOCICLETA", "CAMIONETA",
    "HELICOPTERO", "SUBMARINO", "ASTRONAUTA", "TELESCOPIO", "MICROSCOPIO",
    "UNIVERSIDAD", "BIBLIOTECARIO", "ESTUDIANTES", "MAESTROS", "PROFESOR",
    "PROFESORA", "ESCUELAS", "CUADERNO", "LAPICERO", "BOLIGRAFO",
    "PIZARRON", "CALCULADORA", "DICCIONARIO", "GEOGRAFIA", "MATEMATICAS",
    "HISTORIA", "CIENCIAS", "QUIMICOS", "BIOLOGIA", "LITERATURA",
    "GRAMATICA", "VOCABULARIO", "ALFABETO", "PALABRAS", "ORACIONES",
    "PARRAFOS", "AVENTURA", "MISTERIO", "FANTASTICO", "MARAVILLOSO",
    "HERMOSURA", "DELICIOSO", "INCREIBLE", "AMISTOSO", "FELICIDAD",
    "CELEBRAR", "SORPRESA", "HALLOWEEN", "CALABAZA", "ESQUELETO",
    "VAMPIROS", "FANTASMA", "CEMENTERIO", "RELAMPAGO", "TORMENTA",
    "HURACANES", "TERREMOTO", "VOLCANES", "CONTINENTE", "PENINSULA",
    "ARCHIPIELAGO", "DESIERTO", "CATARATA", "PANORAMA", "HORIZONTE",
    "AMANECER", "ATARDECER", "MEDIANOCHE", "DICIEMBRE", "NOVIEMBRE",
    "SEPTIEMBRE"
  ],
  ui: {
    pageTitle: "Ahorcado",
    heading: "Ahorcado",
    languageLabel: "Idioma",
    statusPlaying: "Adivina la palabra letra por letra.",
    statusWin: "¡Ganaste! La palabra era {word}.",
    statusLose: "¡Perdiste! La palabra era {word}.",
    wrongCountLabel: "Intentos fallidos",
    remainingLabel: "Intentos restantes",
    newGameButton: "Nuevo juego",
    footerNote: "Las palabras tienen siempre al menos 8 letras."
  }
};
