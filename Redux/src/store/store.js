import { createStore, combineReducers } from 'redux';
import productReducer from './reducers/products';
import cartReducer from './reducers/cart';

const store = createStore(
                combineReducers({
                    productReducerState:productReducer,
                    cartReducerState:cartReducer
                })
              );

export default store;


