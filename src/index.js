import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router';
import ListArticle from './components/Layout/List/List';
import './styles/index.css';

const injectTapEventPlugin = require("react-tap-event-plugin");   //react插件 处理 点击300毫秒延迟
injectTapEventPlugin();

if(process.env.NODE_ENV === 'production') {      //判断是生产模式还是开发模式
    console.log('生产模式ing');
} else {
    console.log('开发模式ing');
}


render(
  <Router history={hashHistory}>
    <Route path="/" component={ListArticle}></Route>
  </Router>
, document.getElementById('app'))