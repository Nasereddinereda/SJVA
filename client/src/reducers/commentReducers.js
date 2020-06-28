import {
    // GET_ITEMS,
    // SEARCH_LOGS,
    // SET_LOADING,
    COM_ERROR,
    COM_LOADING,
    ADD_COM,
    GET_COMS
    // GET_EVENTS,
    // DELETE_LOG,
    // SET_CURRENT,
    // CLEAR_CURRENT,
    // UPDATE_LOG
} from "../actions/types";

const initialState = {
    comments: null,
    comment: null,
    error: null,
    loading: false,

    // title: null,
    // discription: null,
    // role: "item",
    // current: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_COMS:
            return {
                ...state,
               comments: action.payload,
                loading: false
            };
        case ADD_COM:
            return {
                ...state,
               comment: [...state.register, action.payload],
                loading: false
            };
        case COM_LOADING:
            return {
                ...state,
                loading: true
            };
        case COM_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
