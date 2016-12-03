import React from 'react';

import { connect } from 'react-redux'
import * as actions from './actions'

const mapDispatchToProps = dispatch => {
  return {
    actions: {
        increase: () => dispatch(actions.increment(1)),
        decrement: () => dispatch(actions.decrement(1))
    }
  }
}

const mapStateToProps = function(store) {
  return {
    number: store.counter.number
  };
}

class Input extends React.Component {
   increase() {
       this.props.actions.increase()
   }

  decrement() {
       this.props.actions.decrement()
   }

  render() {
    return (
      <div>
        <div>Number: {this.props.number}</div>
        <button onClick={this.increase.bind(this)}>+</button>
        <button onClick={this.decrement.bind(this)}>-</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input);