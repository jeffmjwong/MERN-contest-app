import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

class ContestList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: props.contests,
      onClick: props.onContestClick
    };
  }

  render() {
    return(
      <div className="ContestList">
        { Object.keys(this.state.contests).map(contestId =>
          <ContestPreview
            key={ contestId }
            onClick={ this.state.onClick }
            { ...this.state.contests[contestId] } />
        ) }
      </div>
    );
  }
}

ContestList.propTypes = {
  contests: PropTypes.object,
  onContestClick: PropTypes.func.isRequired
};

export default ContestList;
