import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.description,
      contestListClick: props.contestListClick
    };
  }

  render() {
    return (
      <div className="Contest">
        <div className="contest-description">
          { this.state.description }
        </div>
        <div
          className="link home-link"
          onClick={ this.state.contestListClick }>
          Contest List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired
};

export default Contest;
