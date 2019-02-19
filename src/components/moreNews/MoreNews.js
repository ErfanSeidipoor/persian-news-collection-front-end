import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MoreNews.scss';

class MoreNews extends Component {
   
  static propTypes = {
    OnClick: PropTypes.func,
  }
  onClick() {
    if(this.props.OnClick) {
      this.props.OnClick()
    }
  }

  render() {
    return (
      <div
        className="more-news-container"
        onClick={()=>this.onClick()}
      >
        {"بیشتر ..."}
      </div>
    );
  }
}

export default MoreNews;
