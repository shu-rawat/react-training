import products from '../../data.json';
import productActionTypes from '../actions/products/productActionTypes';

const productReducerState = {
    products,
    searchTerm:'',
    productId:null
};


export default function productsReducer(state=productReducerState, action){  
    switch(action.type){
        case productActionTypes.UPDATE_SEARCH_TERM:
            return {...state, searchTerm:action.payload}
        case productActionTypes.UPDATE_PRODUCT_ID:
            return {...state, productId:action.payload}
    }
    return state;
}