/*****************************************************************************************************
 *  Author:       Taariq Isaacs (TarCode)
 *  Date:         10/02/2016
 *  File:         app.js
 *  Description:  This file tells the app which components to render for each route
 *
 ******************************************************************************************************/
import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Template from './app-template';
import Home from './components/home';
import Dashboard from './components/dashboard';


export default () => {
	return (
		<Router>
			<Route path="/" component={ Template }>
				<IndexRoute component={ Home }/>
				<Route name="dashboard" path="/dashboard/:param" component={ Dashboard }/>
			</Route>
		</Router>
	)
}
