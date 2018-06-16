import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.description
    };
  }

  render() {
    return (
      <div className="Contest">
        { this.state.description }
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired
};

export default Contest;
