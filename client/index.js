import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './App.js'
import { HashRouter as Router, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store.js'

const root = document.getElementById('root');

render(
<Provider store = { store }>
<Router>
<Route path='/' component = {App}/>
</Router>
</Provider>
, root)
