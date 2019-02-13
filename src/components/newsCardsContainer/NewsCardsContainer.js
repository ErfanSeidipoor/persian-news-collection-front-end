import React, { Component } from 'react';
import './NewsCardsContainer.scss';
// import Tag from '../tag/tag';
import NewsCard from '../newsCard/newsCard';

class NewsCardsContainer extends Component {
  render() {
    return (
      <div className="news-cards-container">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    );
  }
}

export default NewsCardsContainer;
