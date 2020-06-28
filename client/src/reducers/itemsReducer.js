import {
    // GET_ITEMS,
    // SEARCH_LOGS,
    SET_LOADING,
    SEARCH_ITEMS,
    ITEMS_ERROR,
    ADD_ITEM,
    GET_ITEMS,
    GET_EVENTS,
    // DELETE_LOG,
    SET_CURRENT,
    // CLEAR_CURRENT,
    // UPDATE_LOG
} from "../actions/types";


const initialState = {
    items:null ,
    events:null,
    // itemCurrent:null,
    title: null,
    discription: null,
    role: "item",
    current: null,
    loading: false,
    loadingev: false,
    // loadinCurrent: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
                loadingev: false
            };
        case SEARCH_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case ADD_ITEM:
            return {
                ...state,
                // items: [...state.items, action.payload],
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        case SET_CURRENT:
            return {
                ...state,
                current: action.payload 
            };

        case ITEMS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
