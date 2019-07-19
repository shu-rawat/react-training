import { createStore, combineReducers } from 'redux';
import productReducer from './reducers/products';
import cartReducer from './reducers/cart';

const store = createStore(
                combineReducers({
                    productReducerState:productReducer,
                    cartReducerState:cartReducer,
                }),
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
              );

export default store;


