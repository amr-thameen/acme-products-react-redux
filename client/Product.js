import React from 'react';
import {connect} from 'react-redux'


const Product = ({products}) => {
    const product = products.reduce((productA, productB) => {return (productA.rating > productB.rating) ? productA : productB},0)
    return (
        <div>
            <h3>{product.name}</h3>
        </div>
    )
}

const mapStateToProps = ({products}) => {
    return {
       products
    }
}

export default connect(mapStateToProps)(Product);