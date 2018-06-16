import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchContest = this.fetchContest.bind(this);
    this.currentContent = this.currentContent.bind(this);
    this.state = {
      pageHeader: 'Naming Contests',
      contests: props.initialContests
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  fetchContest(contestId) {
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`
    );
    // look up the contest
    // this.state.contests[contestId]
    this.setState({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId
    });
  }

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest { ...this.state.contests[this.state.currentContestId] } />;
    } else {
      return (
        <ContestList
          onContestClick={ this.fetchContest }
          contests={ this.state.contests } />
      );
    }
  }

  render () {
    return (
      <div className="App">
        <Header message={ this.state.pageHeader } />
        { this.currentContent() }
      </div>
    );
  }
}

App.propTypes = {
  initialContests: PropTypes.object
};

export default App;
