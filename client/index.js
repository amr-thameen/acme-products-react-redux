import React, {Component} from 'react';
import {render} from 'react-dom';
import App from './App.js'
import Product from './Product.js'
import { HashRouter as Router, Link, Route } from 'react-router-dom';

const root = document.getElementById('root');

render(
<Router>
<Route path='/' component = {App}/>
</Router>
, root)
