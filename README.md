# Project Overview

MyReads is a React.js bookshelf app that allows a user to select and categorize books they have read, are currently reading, or want to read. The app also uses an API to search for new books which can then be added to a user's home page.

## Project Details

### Home Page

- The home page includes 3 "shelves" which display the books a user has read, is currently reading, or wants to read.
- Books can be moved from one shelf to another by clicking the arrow button on the bottom right hand corner of each book.
- When the browser is refreshed, the books on a user's home page are retained.

### Search Page

- Clicking on the ➕ icon in the bottom left corner of the screen will open the search page, which includes a search input field.
- As the user types within the search field, the page will display up to 20 books that match the query.
- Books on the search page can be added to a user's home page by clicking the green arrow button on the book cover and selecting a shelf to display the book.

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
