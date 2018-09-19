import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { PropTypes } from 'prop-types';

class ListBooks extends Component {
  static propTypes = {
    shelfBooks: PropTypes.array.isRequired
  };

  render() {
    const { shelfBooks, changeShelf } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              filteredBooks={shelfBooks.filter(book => book.shelf === 'currentlyReading')}
              shelfTitle="Currently Reading"
              changeShelf={changeShelf}
            />
            <BookShelf
              filteredBooks={shelfBooks.filter(book => book.shelf === 'wantToRead')}
              shelfTitle="Want to Read"
              changeShelf={changeShelf}
            />
            <BookShelf
              filteredBooks={shelfBooks.filter(book => book.shelf === 'read')}
              shelfTitle="Read"
              changeShelf={changeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    );
  }
}

export default ListBooks;
