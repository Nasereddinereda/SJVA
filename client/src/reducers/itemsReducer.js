import {
    // GET_LOGS,
    // SEARCH_LOGS,
    SET_LOADING,
    ITEMS_ERROR,
    ADD_ITEM
    // DELETE_LOG,
    // SET_CURRENT,
    // CLEAR_CURRENT,
    // UPDATE_LOG
} from "../actions/types";


const initialState = {
    title: null,
    discription: null,
    role: "item",
    current: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        // case GET_LOGS:
        //     return {
        //         ...state,
        //         logs: action.payload,
        //         loading: false
        //     };
        // case SEARCH_LOGS:
        //     return {
        //         ...state,
        //         logs: action.payload,
        //         loading: false
        //     };
        case ADD_ITEM:
            return {
                ...state,
                logs: [...state.logs, action.payload],
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        // case DELETE_LOG:
        //     return {
        //         ...state,
        //         logs: state.logs.filter(log => log.id !== action.payload),
        //         loading: false
        //     };
        // case UPDATE_LOG:
        //     return {
        //         ...state,
        //         logs: state.logs.map(log =>
        //             log.id === action.payload.id ? action.payload : log
        //         )
        //     };
        // case SET_CURRENT:
        //     return {
        //         ...state,
        //         current: action.payload
        //     };
        // case CLEAR_CURRENT:
        //     return {
        //         ...state,
        //         current: null
        //     };
        case ITEMS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
