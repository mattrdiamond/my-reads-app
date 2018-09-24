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
    this.fetchSearchedBooks(query);
  };

  // 2. fetch matching books and update searchedBooks
  fetchSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((response) => {
        console.log('response:' + response);
        if (response.error) {
          this.setState({ searchedBooks: [] });
          console.log('no match');
        } else {
          this.updateShelf(response);
          console.log('match found! run updateBooks');
        }
      });
    }
  };

  // 3. compare searched books to shelf books and update shelf if match
  updateShelf(books) {
    const { shelfBooks } = this.props;
    const categorizedBooks = books.map((book) => {
      book.shelf = 'none';
      for (let shelfBook of shelfBooks) {
        if (book.id === shelfBook.id) {
          book.shelf = shelfBook.shelf;
        }
      }
      return book;
    });
    this.setState({
      searchedBooks: categorizedBooks
    });
  }

  render() {
    const { queryValue, searchedBooks } = this.state;
    const { changeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
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
            {/* {searchedBooks.map((searchedBook) => {
              return (
                <li key={searchedBook.id}>
                  <Book book={searchedBook} changeShelf={changeShelf} />
                </li>
              );
            })} */}
            {searchedBooks.map((searchedBook) => {
              return (
                <li key={searchedBook.id}>
                  <Book book={searchedBook} changeShelf={changeShelf} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
