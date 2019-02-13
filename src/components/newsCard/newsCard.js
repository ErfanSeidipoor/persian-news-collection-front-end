import React, { Component } from 'react';
import './newsCard.scss';
import Tag from '../tag/tag';
import More from '../more/more';

class NewsCard extends Component {
  // constructor(props) {
  //   super(props);
  // }

  renderRight() {
    const imageUrl = "http://www.irna.ir/userfiles/samir/image/Logo_Irna_en.svg";
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
    const imageUrl = "https://cdn.isna.ir/d/2017/02/10/3/57436660.jpg";
    return (
      <div
        className="news-card-left-image"
        style={{backgroundImage:`url(${imageUrl})`}}
      />
    )
  }
  rednerLeftTextsTitle() {
    return (
      <div className="news-card-left-texts-title">
      عیدی کارکنان فرداواریز میشودasdasdaszzzzzzzzzzzzzzzz
      </div>
    )
  }  
  rednerLeftTextsDescription() {
    return (
      <div className="news-card-left-texts-description">
راهپیمایی چهلمین سال پیروزی انقلاب اسلامی روز ۲۲ بهمن سال ۹۷ ، پیش از آغاز رسمی مراسم در ساعت ۹ صبح روز دوشنبه، در بیش از هزار شهر و ۱۰ هزار روستا در سراسر کشو34ر با شعار «افتخار به گذشته، امید به آینده» آغاز شد.      </div>
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

        <div className="news-card-left-texts-tags-tag right">
          <Tag Hashtag Blue/>
        </div>        
        <div className="news-card-left-texts-tags-tag right">
          <Tag Hashtag Blue/>
        </div>        
        <div className="news-card-left-texts-tags-tag right">
          <Tag Hashtag Blue/>
        </div>        
        <div className="news-card-left-texts-tags-tag right">
          <Tag Hashtag Blue/>
        </div>        
        <div className="news-card-left-texts-tags-tag right">
          <More/>
        </div>
        
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
