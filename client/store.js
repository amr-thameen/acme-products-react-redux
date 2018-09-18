import {createStore, applyMiddleware} from 'redux';
import axios from 'axios'
import logger from 'redux-logger';
import thunk from 'redux-thunk'

const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const CREATE_PRODUCT = 'CREATE_PRODUCT';

const _loadProducts = (products) => {
    return {
        type: LOAD_PRODUCTS,
        products
    }
}

const _deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT,
        product
    }
}

const _createProduct = (product) => {
    return {
        type: CREATE_PRODUCT,
        product
    }
}

const loadProducts = () => {
    return (dispatch) => {
        return axios.get('/api/products')
            .then(response => response.data)
            .then(products => dispatch(_loadProducts(products)))
    }
}

const deleteProduct = (product) => {
    return (dispatch) => {
        return axios.delete(`/api/products/${product.id}`)
        .then(() => dispatch(_deleteProduct(product)))
    }
}

const createProduct = () => {
    return (dispatch) => {
        return axios.post('/api/products')
            .then(response => response.data)
            .then(product => dispatch(_createProduct(product)))
    }
}



const initialState = {products: []}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_PRODUCTS:
            state = {products: action.products};
            break;
        case DELETE_PRODUCT:
            const newProductList = state.products.filter(product => product !== action.product)
            state = {products: newProductList}
            break;
        case CREATE_PRODUCT:
            state = {products: [...state.products, action.product]}
            break;
    }
    return state;
}

const store = createStore(reducer, applyMiddleware(logger,thunk))


export default store;
export {loadProducts, deleteProduct, createProduct}