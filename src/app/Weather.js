import React from 'react';

import { connect } from 'react-redux'
import * as actions from './actions'

const mapDispatchToProps = dispatch => {
  return {
    actions: {
        london: () => dispatch(actions.london(dispatch))
    }
  }
}

const mapStateToProps = function(store) {
  return {
    weather: store.weather.weather
  };
}

class Weather extends React.Component {
    london() {
        this.props.actions.london()
    }

  render() {
    return (
        <div>
            <div>{this.props.weather}</div>
            <button onClick={this.london.bind(this)}>Fetch weather for London</button>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);