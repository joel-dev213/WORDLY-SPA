// 1. Fetch data from the dictionary API using the API url that are stored in the variables bellow.
const PRIMARY_API = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const FALLBACK_API = "https://freedictionaryapi.com/api/v1/entries/en/";

async function fetchWordData(word) {
  const sources = [
    { url: PRIMARY_API, parse: parsePrimaryEntry },
    { url: FALLBACK_API, parse: parseFallbackEntry },
  ];

  let notFound = false;

  for (const source of sources) {
    try {
      const response = await fetch(`${source.url}${encodeURIComponent(word)}`);

      if (response.status === 404) {
        notFound = true;
        continue;
      }
      if (!response.ok) continue;

      const data = await response.json();
      return source.parse(data);
    } catch (error) {
      console.error(error);
    }
  }

  if (notFound) return null;
  throw new Error("All dictionary services are unavailable.");
}

// 2. Parse the API response (definitions, synonyms, pronunciation)
function collectSynonyms(meanings) {
  const synonyms = new Set();
  meanings.forEach((meaning) => {
    (meaning.synonyms || []).forEach((s) => synonyms.add(s));
    (meaning.definitions || []).forEach((def) => {
      (def.synonyms || []).forEach((s) => synonyms.add(s));
    });
  });
  return [...synonyms];
}

function parsePrimaryEntry(entry) {
  const firstMeaning = entry.meanings[0];
  const firstDefinition = firstMeaning.definitions[0];

  return {
    word: entry.word,
    partOfSpeech: firstMeaning.partOfSpeech || "",
    phonetic:
      entry.phonetic ||
      (entry.phonetics.find((p) => p.text) || {}).text ||
      "Not available",
    definition: firstDefinition.definition,
    synonyms: collectSynonyms(entry.meanings),
    audio: (entry.phonetics.find((p) => p.audio) || {}).audio || "",
  };
}

function parseFallbackEntry(data) {
  const entry = data.entries[0];
  const firstSense = entry.senses[0];

  return {
    word: data.word,
    partOfSpeech: entry.partOfSpeech || "",
    phonetic:
      ((entry.pronunciations || []).find((p) => p.type === "ipa") || {}).text ||
      "Not available",
    definition: (firstSense && firstSense.definition) || "No definition available.",
    synonyms: collectSynonyms([entry]),
    audio: "",
  };
}

// 3. Update the DOM dynamically with the fetched data
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const statusEl = document.getElementById("status");
const wordEl = document.getElementById("word");
const phoneticEl = document.getElementById("phonetic");
const definitionEl = document.getElementById("definition");
const synonymsEl = document.getElementById("synonyms");
const playBtn = document.getElementById("play-btn");
const audioEl = document.getElementById("audio");

let currentAudioSrc = "";

function setStatus(message) {
  statusEl.textContent = message;
}

function clearResults() {
  wordEl.textContent = "";
  phoneticEl.textContent = "";
  definitionEl.innerHTML = "<strong>Definition:</strong>";
  synonymsEl.innerHTML = "";
  audioEl.removeAttribute("src");
  currentAudioSrc = "";
  playBtn.disabled = true;
}

function renderResults(details) {
  if (!details) return;
  if (wordEl) wordEl.textContent = details.word || "";
  if (phoneticEl) phoneticEl.textContent = details.phonetic || "Not available";

  const partOfSpeech = details.partOfSpeech
    ? ` (${details.partOfSpeech})`
    : "";
  if (definitionEl) definitionEl.innerHTML = `<strong>Definition${partOfSpeech}:</strong> ${details.definition || "No definition available."}`;

  if (synonymsEl) {
    synonymsEl.innerHTML = "";
    if (!details.synonyms || details.synonyms.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No synonyms available.";
      synonymsEl.appendChild(li);
    } else {
      details.synonyms.forEach((synonym) => {
        const li = document.createElement("li");
        li.textContent = synonym;
        synonymsEl.appendChild(li);
      });
    }
  }

  currentAudioSrc = details.audio || "";
  if (currentAudioSrc && audioEl && playBtn) {
    audioEl.src = currentAudioSrc;
    playBtn.disabled = false;
  } else if (playBtn) {
    if (audioEl) audioEl.removeAttribute("src");
    playBtn.disabled = true;
  }
}

async function handleSearch(word) {
  if (!word) return;
  setStatus("Searching...");
  clearResults();

  try {
    const details = await fetchWordData(word);

    if (!details) {
      setStatus(`No results found for "${word}". Check the spelling and try again.`);
      return;
    }

    renderResults(details);
    setStatus("");
  } catch (error) {
    console.error(error);
    setStatus("Something went wrong. Please try again later.");
  }
}

// 4. Event listeners for form submission and user actions
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const word = searchInput.value.trim();

  if (!word) {
    setStatus("Please enter a word to search.");
    clearResults();
    return;
  }

  handleSearch(word);
});

let searchTimeout;
searchInput.addEventListener("input", () => {
  const word = searchInput.value.trim();
  clearTimeout(searchTimeout);
  
  if (!word) {
    setStatus("");
    clearResults();
    return;
  }
  
  searchTimeout = setTimeout(() => {
    handleSearch(word);
  }, 500);
});

playBtn.addEventListener("click", () => {
  if (!currentAudioSrc) return;
  audioEl.currentTime = 0;
  audioEl.play().catch(() => {
    setStatus("Pronunciation audio could not be played.");
  });
});

clearResults();
