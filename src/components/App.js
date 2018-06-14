import React from 'react';

import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: 'Naming Contests'
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render () {
    return (
      <div className="App">
        <Header message={ this.state.pageHeader } />
        <div>-------</div>
      </div>
    );
  }
}

export default App;