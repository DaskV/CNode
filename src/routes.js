import React, {Component} from 'react'
import {Route, IndexRoute,Redirect} from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import LoginField from './containers/Login'
import PersonInfo from './containers/PersonInfo'
import Message from './containers/Message'
import Article from './containers/Article'
import ArticleAdd from './containers/ArticleAdd'
import checkAuth from './utils/checkAuth'

const routes = (
    <Route path='/' component={App} >
        <Route onChange={checkAuth}>
            <IndexRoute  component={Home}  />
            <Route path='/login' component={LoginField} ></Route>
            <Route path='/user/:username'  component={PersonInfo}></Route>
            <Route path='/message' component={Message}></Route>
            <Route path='/article/:articleId' component={Article}></Route>
            <Route path='/add' component={ArticleAdd}></Route>
            <Redirect from='*' to='/' />
         </Route>
    </Route>
    
);

export default routes;