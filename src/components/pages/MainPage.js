import React, { Component } from 'react';
import BookShelf from '../BookShelf';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class MainPage extends Component {
  static propTypes = {
    shelfBooks: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
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
              shelfBooks={shelfBooks.filter((book) => book.shelf === 'currentlyReading')}
              shelfTitle="Currently Reading"
              changeShelf={changeShelf}
            />
            <BookShelf
              shelfBooks={shelfBooks.filter((book) => book.shelf === 'wantToRead')}
              shelfTitle="Want to Read"
              changeShelf={changeShelf}
            />
            <BookShelf
              shelfBooks={shelfBooks.filter((book) => book.shelf === 'read')}
              shelfTitle="Read"
              changeShelf={changeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
