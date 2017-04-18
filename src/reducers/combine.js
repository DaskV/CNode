import {combineReducers} from 'redux'
import login from './login'
import home from './home'
import message from './message'

const Reducers=combineReducers({login,home,message});

export default Reducers