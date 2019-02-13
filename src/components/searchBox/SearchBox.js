import React, { Component } from 'react';
import Magnify from '../../icons/magnify.js';
import Multiply from '../../icons/multiply.js';
import './SearchBox.scss';

class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
            <div className="search-box-input">
                <div className="search-box-input-search-icon"><Magnify /></div>
                <input className="search-box-input-input"></input>
                <div className="search-box-input-cancel-icon"><Multiply /></div>
            </div>
      </div>
    );
  }
}

export default SearchBox;
