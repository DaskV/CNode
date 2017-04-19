import {combineReducers} from 'redux'
import login from './login'
import home from './home'
import message from './message'
import personinfo from './personinfo'

const Reducers=combineReducers({login,home,message,personinfo});

export default Reducers