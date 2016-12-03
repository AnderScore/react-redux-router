import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware} from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk';

import * as reducers from './reducers'

const middleware = routerMiddleware(browserHistory)

export default () => {
    const store = createStore(
        combineReducers({
            ...reducers,
            routing: routerReducer
        }), 
        applyMiddleware(thunk, middleware)
    )
    return store
}