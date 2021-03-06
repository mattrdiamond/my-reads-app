import React from 'react';
import { Route } from 'react-router-dom';
import Search from './components/pages/SearchPage';
import MainPage from './components/pages/MainPage';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    BooksAPI.getAll().then((response) => {
      this.setState({ books: response });
    });
  };

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.fetchBooks();
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <MainPage shelfBooks={this.state.books} changeShelf={this.changeShelf} />}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <Search
              changeShelf={(book, shelf) => {
                this.changeShelf(book, shelf);
                history.push('/');
              }}
              shelfBooks={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
