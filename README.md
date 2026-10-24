## WORDLY DICTIONALRY SINGLE PAGE APPLICATION

>Wordly this is just a simple and a responsive single Page Appliction (SPA) which allows users to look up for English words and relative their definitions, it's part of speech, Phonetics, Synonyms, and its audio pronunciation. Bellow you will get to learn more about the (SPA), and how to use it.

## Feature for the SPA

- The word Lookup - You get to search for any English word through the search bar.
- Word Definitions - Displays the word's primary definition alongside its part of speech that it belongs whether a (noun, adverb, adjective, etc.)
- Pronunciation - Get a display for the phonetic spelling of the searched word when available.
- The Audio Playback - If the audio pronunciation is availble from the API the user can get to play via the play button.
- Synonyms - Gets to list all the found synonyms for the word you get t search. If non is available, you will be displayed "No synonyms availble".
- Error Handling - It gets to display a user friendly message for an empty inputs, words thatr have no results, or when the APIs are unreachable.
- Responsive Design - U get to have a clean and a presantable design of the (SPA) to enhance good experience when searching for words and receiving information of the words you search for.


## The Tech Stack Used

HTML5 - Markedup and structure of the application
CSS - To add custom styling for the page.
Tailwind css (CDN) - got utility classes used for responsive styling for the structure of the application.
Javascript - This played a great role for the project it handles the API fetching, data parsing, DOM manipulation and event habdling.

~Fetch API for asynchronous data handling.
~Async/Await for clean API requests.
~DOM Manipulation to dynamically update search results.

Dictionary API - used to fetch fetch the word data.
freeDictionaryAPI - This played a huge role in the project where it got to be used i n the event that the primary API fails to return a result.


## The project Structure

index.html: #The main entry point where the structure for the application is created.
kourosh-qaffari-Rrhhzityizg-unsplash.jpg #The background image for the (SPA)
style.css: #All layout and design rules for the structure.
Script.js: #Logic for fetching data and displaying results.
README.md: #The project Documentation.


## How to use the (SPA)

1. git clone - the repositoryonto your local machine.
2. Get to open the index.html in any web browser you have on your machine 
3. Search for a word - Type your English word at the search input and click the search button or just press "Enter" on your keyboard.
4. View your Results - You get to view your (Word, definition, pronunciation, synonyms, and play button "if the audio is available") it will be displayed under the "Search results"


## The Assignment Details and objectives.

- Goal: The main Goal for this work was to create a functional Single Page Application (SPA) that utilizes a public dictonary API and fetch and display word information.

- Objectives: 
    >Implement asynchronous API calls with error handling and a fallback API.
    >Render fetched data onto the DOM without reloading the page.
    >Handle edge cases such as invalid inputs, words not found, and unavailable API services.
    >Style the application to be a clean, readable and presantable.
    >Structur the project in a clean and organized manner. 






