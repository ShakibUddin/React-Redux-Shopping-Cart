import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import ShopReducer from "./Reducers/ShoReducer";


const rootReducers = combineReducers({
    shop: ShopReducer
})
let store = createStore(rootReducers, composeWithDevTools());


export default store;