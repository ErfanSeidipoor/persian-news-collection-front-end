import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlexboxLoader from'../flexboxLoader/flexboxLoader';
import Hamburger from '../../icons/hamburger';

import './Menu.scss';

class Menu extends Component {
  renderFlexboxLoading() {
    if (this.props.news.wait===true) {
      return (
        <div className="flexbox-loader-container">
          <FlexboxLoader />
        </div>
      )
    }
  }
  render() {
    return (
      <div className="menu">
        <div className="menu-signup">ثبت نام</div>
        <div className="menu-signin">ورود</div>
        <div className="menu-gap" />
        <div className="menu-hamburger">
          <Hamburger />
        </div>
        {this.renderFlexboxLoading()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })
 
 const mapDispatchToProps = dispatch => ({
 })

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
