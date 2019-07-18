import cartActionTypes from '../actions/cart/cartActionTypes';
let cart = getCart();
let cartInitialState = {
    cartCount:cart?Object.values(cart).reduce((sum,num)=>(sum+num),0) : 0
};

export default function cartReducer(state=cartInitialState, action){
    switch(action.type){
        case cartActionTypes.ADD_PRODUCT:
            saveToCart(action.payload)
            return {
                ...state,cartCount:state.cartCount+1
            }
    }
    
    return state;
}

function saveToCart(ProductId){
    let cart = getCart();
    if(!cart[ProductId]){
      cart[ProductId] = 0;      
    }
    ++cart[ProductId];
    localStorage.setItem('cart',JSON.stringify(cart));
}

function getCart(){
    let cartStr = localStorage.getItem('cart');
    let cart = {};
    if(cartStr){
      cart = JSON.parse(cartStr);
    }
    return cart;
}