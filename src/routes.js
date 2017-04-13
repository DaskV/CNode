import React, {Component} from 'react'
import {Route, IndexRoute} from 'react-router'
import Home from './containers/Home'


const routes = (
   <Route path='/' component={Home}></Route>
);

export default routes;