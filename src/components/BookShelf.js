import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  state = {};
  render() {
    const { filteredBooks } = this.props;
    console.log(filteredBooks);
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {filteredBooks.map(book => (
              <li key={book.id}>
                <Book book={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;