import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Booklist from './containers/book-list';
import BookDetail from './containers/book-details';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Booklist />
        <BookDetail />
      </div>
    );
  }
}

export default App;
