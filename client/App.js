import React, {Component} from 'react'
import Nav from './Nav.js'
import ProductList from './ProductList.js'
import store, {loadProducts} from './store.js'
import {Route} from 'react-router-dom';
import Product from './Product.js'
import {connect} from 'react-redux'


class App extends Component {
    componentDidMount(){
        this.props.loadProducts()
    }

    render(){
        return (
            <div>
            <Nav/>
            <Route exact path = "/products" component = {ProductList}/>
            <Route path='/products/:id' component = {Product}/>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        loadProducts: () => dispatch(loadProducts())
    }
}

export default connect(null, mapDispatchToProps)(App);











// const nextProps = Object.entries(nextProps);
// Object.entries(prevProps).every(([key, val], i) => {
//     const [nextKey, nextVal] = nextProps[i];

//     return nextKey === key && val === nextVal;
// })

