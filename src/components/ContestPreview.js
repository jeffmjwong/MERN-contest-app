import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      categoryName: props.categoryName,
      contestName: props.contestName,
      contestId: props.id,
      onClick: props.onClick
    };
  }

  handleClick() {
    this.state.onClick(this.state.contestId);
  }

  render() {
    return (
      <div className="link ContestPreview" onClick={ this.handleClick }>
        <div className="category-name">
          { this.state.categoryName }
        </div>
        <div className="contest-name">
          { this.state.contestName }
        </div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ContestPreview;
