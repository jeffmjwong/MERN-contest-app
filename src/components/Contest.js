import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contestId: props.id
    };
  }

  render() {
    return (
      <div className="Contest">
        { this.state.contestId }
      </div>
    );
  }
}

Contest.propTypes = {
  id: PropTypes.number.isRequired
};

export default Contest;
