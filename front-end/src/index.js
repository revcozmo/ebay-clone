import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../public/stylesheets/styles.css';
import SignIn from '../src/Components/SignIn.js';

import {Router, IndexRoute, Route, hashHistory } from 'react-router';


ReactDOM.render(

<Router history={hashHistory}>
	<Route path='/' component={App} />
	<Route path='signIn' component={SignIn} />
</Router>,
	document.getElementById('root')
);
