import React, {Component} from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import LoginField from './containers/Login'

const routes = (
    <Route path='/' component={App} >
         <IndexRoute  component={Home} />
         <Route path='/login' component={LoginField}></Route>
    </Route>
  
);

export default routes;