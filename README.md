## WORDLY DICTIONARY SINGLE PAGE APPLICATION

Wordly is a simple, responsive single-page application (SPA) that lets users look up English words and see their definitions, part of speech, Phonetics, Synonyms, and audio pronunciation. Below, you will get to learn more about the SPA and how to use it.

## Features of the SPA

- The word Lookup - You can search for any English word through the search bar.
- Word Definitions - Displays the word's primary definition alongside its part of speech (noun, adverb, adjective, etc.)
- Pronunciation - Get a display for the phonetic spelling of the searched word when available.
- The Audio Playback - If the audio pronunciation is available from the API, the user can play it via the play button.
- Synonyms - Gets to list all the found synonyms for the word you get to search. If none are available, you will see "No synonyms available".
- Error Handling - It gets to display a user-friendly message for empty inputs, words that have no results, or when the APIs are unreachable.
- Responsive Design - U get to have a clean and presentable design of the (SPA) to enhance a good experience when searching for words and receiving information of the words you search for.


## The Tech Stack Used

HTML5 - Markup and structure of the application
CSS - To add custom styling for the page.
Tailwind CSS (CDN) - Utility classes used for responsive styling for the structure of the application.
JavaScript - Played a key role in the project; it handles API fetching, data parsing, DOM manipulation, and event handling.

~Fetch API for asynchronous data handling.
~Async/Await for clean API requests.
~DOM Manipulation to dynamically update search results.

Dictionary API - used to fetch the word data.
freeDictionaryAPI - This played a huge role in the project, where it got to be used i n the event that the primary API fails to return a result.


## The project Structure

1. .html: #The main entry point where the structure for the application is created.
kourosh-qaffari-Rrhhzityizg-unsplash.jpg #The background image for the (SPA)
3. style.css: #All layout and design rules for the structure.
4. Script.js: #Logic for fetching data and displaying results.
5. README.md: #The project Documentation.


## How to use the (SPA)

1. git clone the repository onto your local machine.
2. Open the index.html in any web browser you have on your machine 
3. Search for a word - Type your English word at the search input and click the search button or just press "Enter" on your keyboard.
4. View your Results - You get to view your (Word, definition, pronunciation, synonyms, and play button (if the audio is available); it will be displayed under the "Search results"


## The Assignment Details and Objectives.

- Goal: The main Goal for this work was to create a functional Single Page Application (SPA) that utilizes a public dictionary API and fetches and displays word information.

- Objectives:
  
   A. Implement asynchronous API calls with error handling and a fallback API.
  
   B. Render fetched data onto the DOM without reloading the page.
  
   C. Handle edge cases such as invalid inputs, words not found, and unavailable API services.
  
   D. Style the application to be clean, readable, and presentable.
  
   E. Structure the project in a clean and organized manner. 






