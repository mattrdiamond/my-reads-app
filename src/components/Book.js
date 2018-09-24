import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  };

  render() {
    const { book, changeShelf } = this.props;

    // if thumbnail image missing, set equal to empty string
    let thumbnail = book.imageLinks ? book.imageLinks.thumbnail : '';

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url('${thumbnail}')`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(e) => changeShelf(book, e.target.value)}
              value={book.shelf || 'none'}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors || 'No Author'}</div>
      </div>
    );
  }
}

export default Book;
