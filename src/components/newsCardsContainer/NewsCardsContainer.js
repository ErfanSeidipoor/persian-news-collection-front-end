import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewsCard from '../newsCard/newsCard';
import Loading from '../loading/Loading';
import MoreNews from '../moreNews/MoreNews';
import { GetNewsInital,GetNewsLowerThan,GetNewsGreaterThan } from '../../actions/newsActions';

import './NewsCardsContainer.scss';

class NewsCardsContainer extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     newsList:[],
  //   }
  // }

  componentDidMount() {
    this.props.GetNewsInital();
    setInterval(() => this.props.GetNewsGreaterThan(this.props.news.max) , 10000);
  }
  
  // componentWillReceiveProps(nextprops) {
  //   if (nextprops.news.success!==this.props.news.success && nextprops.news.success===true) {

  //   }
  // }
  renderMoreNews() {
    if (this.props.news.wait===true) return ""; 
    return (
      <div className="loading-container">
        <MoreNews
          OnClick={()=>this.props.GetNewsLowerThan(this.props.news.min)}
        />
      </div>
    )
  }

  renderLoading() {
    if (this.props.news.wait!==true) return ""; 
    return (
      <div className="loading-container">
        <Loading />
      </div>
    )
  }

  render() {
    console.log("max: ",this.props.news.max)
    console.log("min: ",this.props.news.min)

    return (
      <div className="news-cards-container">
        {this.props.news.newsList.map(news=> <NewsCard News={news} key={news.newsId}/>)}
        {this.renderLoading()}
        {this.renderMoreNews()}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state
 })
 
 const mapDispatchToProps = dispatch => ({
  GetNewsInital: (...args) => dispatch(GetNewsInital(...args)),
  GetNewsLowerThan: (...args) => dispatch(GetNewsLowerThan(...args)),
  GetNewsGreaterThan: (...args) => dispatch(GetNewsGreaterThan(...args)),
  
 })


export default connect(mapStateToProps, mapDispatchToProps)(NewsCardsContainer);
