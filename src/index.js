import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { browserHistory, Router, Route, IndexRedirect } from 'react-router'
import { syncHistoryWithStore} from 'react-router-redux'

import App from './app/App';
import Count from './app/Count';
import About from './app/About';
import Weather from './app/Weather';

import createStore from './app/createStore'

const store = createStore()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App} >
        <IndexRedirect to='/input' />
        <Route path='/count' component={Count} />
        <Route path='/about' component={About} />
        <Route path='/weather' component={Weather} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
