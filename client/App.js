import React, {Component} from 'react'
import Nav from './Nav.js'
import ProductList from './ProductList.js'
import store, {loadProducts} from './store.js'
import {Provider} from 'react-redux'
import {Route, Switch} from 'react-router-dom';
import Product from './Product.js'


class App extends Component {
    componentDidMount(){
        store.dispatch(loadProducts())
    }

    render(){
        return (
            <Provider store = { store }>
            <div>
            <Nav/>
            <Route exact path = "/products" component = {ProductList}/>
            <Route path='/products/:id' component = {Product}/>
            </div>
            </Provider>
        )
    }
}

export default App;

