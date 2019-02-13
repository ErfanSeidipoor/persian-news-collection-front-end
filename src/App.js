import React, { Component } from 'react';
// import logo from './logo.svg';
import SearchBox from './components/searchBox/SearchBox';
import Menu from './components/menu/Menu';
import NewsCardsContainer from './components/newsCardsContainer/NewsCardsContainer';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <SearchBox />
        <NewsCardsContainer />
      </div>
    );
  }
}

export default App;
