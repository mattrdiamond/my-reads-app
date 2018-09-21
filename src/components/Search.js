import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';

class Search extends Component {
  state = {
    queryValue: '',
    searchedBooks: []
  };

  // 1. update state to equal query
  updateQuery = (query) => {
    this.setState({ queryValue: query });
    this.updateSearchedBooks(query);
  };

  // 2. fetch matching books and update searchedBooks
  updateSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        // if (searchedBooks.length > 0) {
        //   this.setState({ searchedBooks: searchedBooks });
        // } else {
        //   this.setState({ searchedBooks: [] });
        // }
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: searchedBooks });
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  };

  render() {
    const { queryValue, searchedBooks } = this.state;
    const { changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={queryValue}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* 3. display matching books */}
            {searchedBooks.map((searchedBook) => (
              <li key={searchedBook.id}>
                <Book book={searchedBook} changeShelf={changeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
