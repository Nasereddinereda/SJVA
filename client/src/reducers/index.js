import {combineReducers} from 'redux';
import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";

const rootReducers = combineReducers({
auth : authReducer, 
items: itemsReducer
});

export default rootReducers ; 