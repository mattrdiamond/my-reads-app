import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../utils/BooksAPI';
import Book from '../Book';
import PropTypes from 'prop-types';

class SearchPage extends Component {
  static propTypes = {
    changeShelf: PropTypes.func.isRequired
  };

  state = {
    queryValue: '',
    searchedBooks: []
  };

  // update state to equal query
  updateQuery = (query) => {
    this.setState({ queryValue: query });
    this.fetchSearchedBooks(query);
  };

  // fetch matching books and update searchedBooks
  fetchSearchedBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((response) => {
        if (response.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.updateShelf(response);
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  };

  // compare searched books to shelf books and update shelf name when there is a match
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
            {/* display searched books */}
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

export default SearchPage;
