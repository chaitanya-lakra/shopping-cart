import { combineReducers } from "redux";
import addToCartreducer from "./addToCartReducer";
import wishListReducer from "./wishListReducer";

const rootReducer = combineReducers({
    addToCartreducer,
    wishListReducer
});

export default rootReducer;