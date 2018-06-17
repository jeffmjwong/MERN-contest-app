import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchContest = this.fetchContest.bind(this);
    this.fetchContestList = this.fetchContestList.bind(this);
    this.currentContest = this.currentContest.bind(this);
    this.pageHeader = this.pageHeader.bind(this);
    this.currentContent = this.currentContent.bind(this);
    this.state = props.initialData;
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
    api.fetchContest(contestId)
      .then(contest => {
        this.setState({
          currentContestId: contest.id,
          contests: {
            ...this.state.contests,
            [contest.id]: contest
          }
        });
      })
      .catch(console.error);
  }

  fetchContestList() {
    pushState(
      { currentContestId: null },
      '/'
    );
    api.fetchContestList()
      .then(contests => {
        this.setState({
          currentContestId: null,
          contests: contests
        });
      })
      .catch(console.error);
  }

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    } else {
      return 'Naming Contests';
    }
  }

  currentContent() {
    if (this.state.currentContestId) {
      return <Contest
        contestListClick={ this.fetchContestList }
        { ...this.currentContest() } />;
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
        <Header message={ this.pageHeader() } />
        { this.currentContent() }
      </div>
    );
  }
}

App.propTypes = {
  initialData: PropTypes.object.isRequired
};

export default App;
