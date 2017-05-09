import {combineReducers} from 'redux'
import login from './login'
import home from './home'
import {message} from './message'
import {personinfo,otherpersoninfo,persontopic_collect} from './personinfo'
import {article} from './article'

const Reducers=combineReducers({login,home,message,personinfo,otherpersoninfo,persontopic_collect,article});

export default Reducers