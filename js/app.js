// Galgje - kernlogica
// Deze module bevat alleen spellogica en DOM-koppeling. Alle teksten en
// woordenlijsten komen uit window.GALGJE_LANG[code] (zie js/languages/*.js).
// Om een nieuwe taal toe te voegen: maak js/languages/<code>.js met dezelfde
// structuur en voeg een <script> tag toe in index.html. Er hoeft niets in
// dit bestand te veranderen.

(function () {
  "use strict";

  const MAX_WRONG = 8;
  const STORAGE_KEY = "galgje-taal";

  /** @type {HTMLElement} */
  const el = {
    languageSelect: document.getElementById("language-select"),
    languageLabel: document.getElementById("language-label"),
    heading: document.getElementById("heading-text"),
    pageTitle: document.getElementById("page-title"),
    statusMessage: document.getElementById("status-message"),
    wordDisplay: document.getElementById("word-display"),
    wrongCountLabel: document.getElementById("wrong-count-label"),
    remainingLabel: document.getElementById("remaining-label"),
    keyboard: document.getElementById("keyboard"),
    newGameBtn: document.getElementById("new-game-btn"),
    footerNote: document.getElementById("footer-note"),
    gameBoard: document.querySelector(".game"),
  };

  /** Actuele spelstatus */
  const state = {
    langCode: null,
    lang: null,
    word: "",
    guessed: new Set(),
    wrongCount: 0,
    over: false,
  };

  function availableLanguages() {
    return Object.keys(window.GALGJE_LANG || {});
  }

  function loadSavedLanguage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && window.GALGJE_LANG[saved]) return saved;
    } catch (e) {
      // localStorage niet beschikbaar (bv. privénavigatie) - geen probleem.
    }
    return "nl";
  }

  function saveLanguage(code) {
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {
      // negeren als opslag niet mogelijk is
    }
  }

  function populateLanguageSelect() {
    const codes = availableLanguages();
    el.languageSelect.innerHTML = "";
    codes.forEach((code) => {
      const lang = window.GALGJE_LANG[code];
      const option = document.createElement("option");
      option.value = code;
      option.textContent = `${lang.flag} ${lang.name}`;
      el.languageSelect.appendChild(option);
    });
  }

  function pickRandomWord(lang) {
    const words = lang.words.filter((w) => [...w].length >= lang.minLength);
    const pool = words.length ? words : lang.words;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function applyLanguageTexts(lang) {
    const ui = lang.ui;
    document.documentElement.lang = lang.code;
    el.pageTitle.textContent = ui.pageTitle;
    el.heading.textContent = ui.heading;
    el.languageLabel.textContent = ui.languageLabel;
    el.newGameBtn.textContent = ui.newGameButton;
    el.footerNote.textContent = ui.footerNote;
  }

  function formatTemplate(template, word) {
    return template.replace("{word}", word);
  }

  function buildKeyboard(lang) {
    el.keyboard.innerHTML = "";
    lang.alphabet.forEach((letter) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "key";
      btn.textContent = letter;
      btn.dataset.letter = letter;
      btn.addEventListener("click", () => guessLetter(letter));
      el.keyboard.appendChild(btn);
    });
  }

  function resetHangmanDrawing() {
    document.querySelectorAll("#figure .part").forEach((part) => {
      part.classList.remove("visible");
    });
  }

  function revealHangmanPart(count) {
    const part = document.getElementById("part-" + count);
    if (part) part.classList.add("visible");
  }

  function renderWord() {
    el.wordDisplay.innerHTML = "";
    [...state.word].forEach((letter) => {
      const slot = document.createElement("span");
      const isRevealed = state.guessed.has(letter);
      slot.className = "letter-slot" + (isRevealed ? " revealed" : "");
      slot.textContent = isRevealed ? letter : "_";
      el.wordDisplay.appendChild(slot);
    });
  }

  function renderMeta() {
    const ui = state.lang.ui;
    el.wrongCountLabel.textContent = `${ui.wrongCountLabel}: ${state.wrongCount} / ${MAX_WRONG}`;
    el.remainingLabel.textContent = `${ui.remainingLabel}: ${MAX_WRONG - state.wrongCount}`;
  }

  function setStatus(message, kind) {
    el.statusMessage.textContent = message;
    el.statusMessage.classList.remove("win", "lose");
    if (kind) el.statusMessage.classList.add(kind);
  }

  function isWordComplete() {
    return [...state.word].every((letter) => state.guessed.has(letter));
  }

  function setKeyboardEnabled(enabled) {
    el.keyboard.querySelectorAll(".key").forEach((btn) => {
      btn.disabled = !enabled;
    });
  }

  function guessLetter(letter) {
    if (state.over || state.guessed.has(letter)) return;

    state.guessed.add(letter);
    const btn = el.keyboard.querySelector(`[data-letter="${cssEscape(letter)}"]`);
    const correct = state.word.includes(letter);

    if (correct) {
      if (btn) btn.classList.add("correct");
    } else {
      state.wrongCount += 1;
      if (btn) btn.classList.add("wrong");
      revealHangmanPart(state.wrongCount);
      triggerShake();
    }
    if (btn) btn.disabled = true;

    renderWord();
    renderMeta();
    evaluateGameEnd();
  }

  function cssEscape(str) {
    return window.CSS && CSS.escape ? CSS.escape(str) : str;
  }

  function triggerShake() {
    el.gameBoard.classList.remove("shake-board");
    // force reflow zodat de animatie opnieuw kan starten
    void el.gameBoard.offsetWidth;
    el.gameBoard.classList.add("shake-board");
  }

  function triggerCelebrate() {
    el.gameBoard.classList.remove("celebrate");
    void el.gameBoard.offsetWidth;
    el.gameBoard.classList.add("celebrate");
  }

  function evaluateGameEnd() {
    const ui = state.lang.ui;
    if (isWordComplete()) {
      state.over = true;
      setStatus(formatTemplate(ui.statusWin, state.word), "win");
      setKeyboardEnabled(false);
      triggerCelebrate();
    } else if (state.wrongCount >= MAX_WRONG) {
      state.over = true;
      revealFullWord();
      setStatus(formatTemplate(ui.statusLose, state.word), "lose");
      setKeyboardEnabled(false);
    }
  }

  function revealFullWord() {
    el.wordDisplay.innerHTML = "";
    [...state.word].forEach((letter) => {
      const slot = document.createElement("span");
      slot.className = "letter-slot revealed";
      slot.textContent = letter;
      el.wordDisplay.appendChild(slot);
    });
  }

  function startNewGame() {
    const lang = state.lang;
    state.word = pickRandomWord(lang);
    state.guessed = new Set();
    state.wrongCount = 0;
    state.over = false;

    resetHangmanDrawing();
    buildKeyboard(lang);
    renderWord();
    renderMeta();
    setStatus(lang.ui.statusPlaying, null);
    setKeyboardEnabled(true);
  }

  function switchLanguage(code) {
    if (!window.GALGJE_LANG[code]) return;
    state.langCode = code;
    state.lang = window.GALGJE_LANG[code];
    saveLanguage(code);
    applyLanguageTexts(state.lang);
    el.languageSelect.value = code;
    startNewGame();
  }

  function handlePhysicalKeyboard(event) {
    if (!state.lang || state.over) return;
    const letter = event.key.toUpperCase();
    if (state.lang.alphabet.includes(letter)) {
      guessLetter(letter);
    }
  }

  function init() {
    populateLanguageSelect();
    const startCode = loadSavedLanguage();

    el.languageSelect.addEventListener("change", (e) => switchLanguage(e.target.value));
    el.newGameBtn.addEventListener("click", startNewGame);
    document.addEventListener("keydown", handlePhysicalKeyboard);

    switchLanguage(startCode);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
