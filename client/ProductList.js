import React from 'react';
import { connect } from 'react-redux';
import { deleteProduct, createProduct } from './store';



const ProductList = ({products, deleteProduct, createProduct}) => {
    const _products = products.sort((a,b) =>  {return (b.rating - a.rating)})
    return (
        <div>
            <button className="btn btn-primary" onClick = {() => createProduct()}> <strong>CREATE PRODUCT</strong></button>
            <ul>
                {_products.map(product => {
                    return (
                        <div key = {product.id}>
                        <li><h4>{product.name} {product.rating}</h4></li>
                        <button className="btn btn-warning" onClick = {() => deleteProduct(product)} >Remove</button>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = ({products}) => {
    return {
       products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct: (product) => dispatch(deleteProduct(product)),
        createProduct: () => dispatch(createProduct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);