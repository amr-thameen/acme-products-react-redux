import React from 'react';
import {Link, Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

const Nav = ({products}) => {
    const product = products.reduce((productA, productB) => {return (productA.rating > productB.rating) ? productA : productB},0)
    return (
        <div>
            <ul>
               <li><h3><Link to={'/products'}>Products {products.length}</Link></h3></li>
                <li><h3><Link to = {`/products/${product.id}`}>Top Rated Product  ( {product.name} )</Link></h3></li>
            </ul>
        </div>
    )
}

const mapStateToProps = ({products}) => {
    return {
        products
    }
}

export default connect(mapStateToProps)(Nav)