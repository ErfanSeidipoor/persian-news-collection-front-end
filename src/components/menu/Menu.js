import React, { Component } from 'react';
import Hamburger from '../../icons/hamburger';
import './Menu.scss';

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="menu-signup">ثبت نام</div>
        <div className="menu-signin">ورود</div>
        <div className="menu-gap"/>
        <div className="menu-hamburger">
          <Hamburger />
        </div>
      </div>
    );
  }
}

export default Menu;
