import React from 'react';

import Menu from './Menu'

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default App;