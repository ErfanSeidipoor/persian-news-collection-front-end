import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './more.scss';


class More extends Component {
  
static propTypes = {
}

static defaultProps = {
}

render() {
  return (
    <div className="more">
      <div className="more-circle" />
      <div className="more-circle" />
      <div className="more-circle" />
    </div>
  );
}
}

export default More;
