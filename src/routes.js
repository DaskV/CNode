import React, {Component} from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './containers/App'
import Home from './containers/Home'
import LoginField from './containers/Login'
import PersonInfo from './containers/PersonInfo'
const routes = (
    <Route path='/' component={App} >
         <IndexRoute  component={Home}  />
         <Route path='/login' component={LoginField} ></Route>
         <Route path='/personInfo/:username'  component={PersonInfo}></Route>
    </Route>
  
);

export default routes;