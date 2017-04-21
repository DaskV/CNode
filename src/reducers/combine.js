import {combineReducers} from 'redux'
import login from './login'
import home from './home'
import {message} from './message'
import {personinfo,otherpersoninfo,persontopic_collect} from './personinfo'

const Reducers=combineReducers({login,home,message,personinfo,otherpersoninfo,persontopic_collect});

export default Reducers