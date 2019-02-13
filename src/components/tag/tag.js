import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

import Multiply from '../../icons/multiply';
import Check from '../../icons/check';
import Hashtag from '../../icons/hashtag';
import Heart from '../../icons/heart';
import Comment from '../../icons/message';

import './tag.scss';


class Tag extends Component {
  
static propTypes = {
  Check: PropTypes.bool,
  Cross: PropTypes.bool,
  Hashtag: PropTypes.bool,
  Like: PropTypes.bool,
  Comment: PropTypes.bool,
  
  Text: PropTypes.string,

  Blue: PropTypes.bool,
  Green: PropTypes.bool,
  Red: PropTypes.bool,
  Gray: PropTypes.bool,
}

static defaultProps = {
  Check: false,
  Cross: true,
  Text: 'empty',

  Blue: false,
  Green: false,
  Red: false,
  Gray: false,
}
  renderIcon() {
    if (this.props.Check) return <Check />
    if (this.props.Hashtag) return <Hashtag />
    if (this.props.Like) return <Heart />
    if (this.props.Comment) return <Comment />
    if (this.props.Cross) return <Multiply />
  }
  render() {
    const tag_class = classnames(
      'tag',
      {'blue':this.props.Blue},
      {'green':this.props.Green},
      {'red':this.props.Red},
      {'gray':this.props.Gray},
    )

    return (
      <div className={tag_class}>
        <div className="tag-icon">
          <div className="tag-icon-inner">
            {this.renderIcon()}
          </div>
        </div>
        <div className="tag-value">
          {this.props.Text}
        </div>
      </div>
    );
  }
}

export default Tag;
