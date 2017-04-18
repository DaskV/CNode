import { applyMiddleware, createStore, compose } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import Reducers from './reducers/combine'


let enhancer = compose(
        applyMiddleware(thunk, createLogger()),
        window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(Reducers,enhancer);

export default store