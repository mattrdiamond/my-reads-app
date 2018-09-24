# Project Overview

MyReads is a React.js bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The app also uses an API to search for new books which can then be added to your home page.

## Project Details

### Home Page

- In this application, the home page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are: "Currently Reading", "Want to Read", and "Read".
- Each book has a control on the bottom left corner that allows you to select the shelf for that book. When you select a different shelf, the book moves there.
- When the browser is refreshed, the books on your home page are retained.

### Search Page

- Clicking on the ➕ icon in the bottom left corner of the screen will open the search page.
- The search page has a text input field that may be used to find new books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that allows you add the book to your library.
- If a book already appears on your bookshelf, it will have the same state on both the main application page and the search page.
- The search page also has a link to "/" (the root URL), which leads back to the main page.

Note: _The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the *only* terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results._

## Running Instructions

1. Test to make sure you have Node and NPM installed by running `node -v` and `npm -v` in terminal.
2. Click on "Clone or Download" on this repository page to download .zip file.
3. Open the root folder of the repository in terminal.
4. Run `npm install` in terminal to install the project dependencies.
5. Start a local server to run the app:
   - Run `npm start` in terminal.
   - This will start a local dev server on http://localhost:3000

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
