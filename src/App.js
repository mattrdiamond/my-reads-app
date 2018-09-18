import React from 'react';
import { Route } from 'react-router-dom';
import Search from './components/Search';
import ListBooks from './components/ListBooks';
import * as BooksAPI from './utils/BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks shelfBooks={this.state.books} />} />
        <Route path="/search" render={({ history }) => <Search />} />
      </div>
    );
  }
}

export default BooksApp;
