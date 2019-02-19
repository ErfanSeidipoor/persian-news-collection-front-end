import React, { Component } from 'react';
import './Loading.scss';

class Loading extends Component {
  render() {
    return (
      <div className="loading-container">
        <div className="loading" />
      </div>
    );
  }
}

export default Loading;
