import 'babel-polyfill';
import React from 'react'
import {render} from 'react-dom'
import store from './store'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import routes from './routes'
import './styles/animate.css'
import './styles/index.css'

const injectTapEventPlugin = require("react-tap-event-plugin"); //react插件 处理 点击300毫秒延迟
injectTapEventPlugin();

if (process.env.NODE_ENV === 'production') { //判断是生产模式还是开发模式
  console.log('生产模式ing');
} else {
  console.log('开发模式ing');
}

render(
  <Provider store={store}>
  <Router routes={routes} history={hashHistory}/>
</Provider>, document.getElementById('app'))