import {
    // GET_ITEMS,
    // SEARCH_LOGS,
    // SET_LOADING,
    REG_ERROR ,
    REG_LOADING ,
    ADD_REG,
    GET_REGS,
    GET_EV_REGS,
    SEARCH_REGS ,
    REG_DELETE , 
    REG_CONFIRM
    // GET_EVENTS,
    // DELETE_LOG,
    // SET_CURRENT,
    // CLEAR_CURRENT,
    // UPDATE_LOG
} from "../actions/types";

const initialState = {
    registerations:null ,
    current:null ,
    register: null,
    error: null,
    loading: false,
    
    // title: null,
    // discription: null,
    // role: "item",
    // current: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_REGS:
            return {
                ...state,
                registerations: action.payload,
                loading: false
            };
        case GET_EV_REGS:
            return {
                ...state,
                current: action.payload,
                loading: false
            };
        case SEARCH_REGS:
            return {
                ...state,
                registerations: action.payload,
                loading: false
            };
        case ADD_REG:
            return {
                ...state,
                // register: [...state.register],
                loading: false
            };
        case REG_CONFIRM:
            return {
                ...state,
                registerations: state.registerations.filter(
                    reg => reg._id !== action.payload
                ),
                loading: false
            };
        case REG_DELETE:
            return {
                ...state,
                registerations: state.registerations.filter(
                    reg => reg._id !== action.payload
                ),
                loading: false
            };
        case REG_LOADING:
            return {
                ...state,
                loading: true
            };
        case REG_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
