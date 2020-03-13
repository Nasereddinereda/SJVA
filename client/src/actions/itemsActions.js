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
} from "./types";

// add new log
export const addItem = log => async dispatch => {
    try {
        setLoading();
        console.log(log);
        const res = await fetch("/api/v0/items", {
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_ITEM,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: ITEMS_ERROR,
            payload: err.response
        });
    }
};

// set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
