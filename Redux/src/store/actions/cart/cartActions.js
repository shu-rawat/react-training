import cartActionTypes from './cartActionTypes';

export function addProduct(productId){
    return {
        type: cartActionTypes.ADD_PRODUCT,
        payload: productId
    };
}

