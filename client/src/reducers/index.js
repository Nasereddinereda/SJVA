import {combineReducers} from 'redux';
import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";
import regReducer from "./regReducer";
import commentReducer from "./commentReducers";

const rootReducers = combineReducers({
auth : authReducer, 
reg: regReducer,
items: itemsReducer,
comment: commentReducer
});

export default rootReducers ; 