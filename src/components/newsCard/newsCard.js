import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Tag from '../tag/tag';
import More from '../more/more';
import NewsModel from '../../data_model/newsModel'

import './newsCard.scss';

class NewsCard extends Component {
  static propTypes = {
    News: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      NewsModel: NewsModel.from(props.News),
    }
  }

  renderRight() {
    const imageUrl = "http://www.irna.ir/userfiles/samir/image/Logo_Irna_en.svg";
    // const imageUrl = this.state.NewsModel.getImageUrl();
    return (
      <div className="news-card-right">
        <div
          className="news-card-right-agancy"
          style={{backgroundImage:`url(${imageUrl})`}}
        />
        <div className="news-card-right-time">yesterday</div>
      </div>
    )
  }
  renderLeft() {
    return (
      <div className="news-card-left">
        {this.renderLeftTexts()}
        {this.renderLeftImage()}
      </div>
    )
  }
  renderLeftTexts() {
    return (
       <div className="news-card-left-texts">
        {this.rednerLeftTextsTitle()}
        {this.rednerLeftTextsDescription()}
        {this.rednerLeftTextsTags()}
       </div>
    )
  }
  renderLeftImage() {
    // const imageUrl = "https://cdn.isna.ir/d/2017/02/10/3/57436660.jpg";
    const imageUrl = this.state.NewsModel.getImageUrl();
    return (
      <div
        className="news-card-left-image"
        style={{backgroundImage:`url(${imageUrl})`}}
      />
    )
  }
  rednerLeftTextsTitle() {
    return (
      <a
        className="news-card-left-texts-title"
        href={this.state.NewsModel.getUrl()}
        target="_blank"
        rel="noopener noreferrer" 
        >
        {this.state.NewsModel.getTitle()}
      </a>
    )
  }  
  rednerLeftTextsDescription() {
    return (
      <div className="news-card-left-texts-description">
        {this.state.NewsModel.getDescription()}
      </div>
    )
  }
  rednerLeftTextsTags() {
    return (
      <div className="news-card-left-texts-tags">

        <div className="news-card-left-texts-tags-tag left">
          <Tag Text={"12"} Like Green />
        </div>        
        <div className="news-card-left-texts-tags-tag left">
          <Tag Text={"32"} Like Red />
        </div>        
        <div className="news-card-left-texts-tags-tag left">
          <Tag Text={"100"} Comment Gray/>
        </div>

        {
          this.state.NewsModel.getTags().map(tag=>
            <div className="news-card-left-texts-tags-tag right" key={tag}>
              <Tag Hashtag Blue Text={tag}/>
            </div>
          )
        }
        {
          this.state.NewsModel.getTags().length!==0 ?
          <div className="news-card-left-texts-tags-tag right">
            <More />
          </div>          
          :
          ""
        }
      </div>
    )
  }

  render() {
    return (
      <div className="news-card-container">
        { this.renderRight() }
        { this.renderLeft() }
      </div>
    );
  }
}

export default NewsCard;
