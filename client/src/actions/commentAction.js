import {
    // GET_ITEMS,
    // SEARCH_LOGS,
    // SET_LOADING,
    COM_ERROR,
    COM_LOADING,
    ADD_COM , 
    GET_COMS
    // GET_ITEMS,
    // GET_EVENTS,
    // DELETE_LOG,
    // SET_CURRENT,
    // CLEAR_CURRENT,
    // UPDATE_LOG
} from "./types";





// add new log
export const addCOM = (log) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/api/v0/items/${log.item}/commentary`, {
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json"
            }
        });



        const data = await res.json();
        dispatch({
            type: ADD_COM,
            payload: data
        });


    } catch (err) {
        dispatch({
            type: COM_ERROR,
            payload: err.response
        });
    }
};


// set loading to true
export const setLoading = () => {
    return {
        type: COM_LOADING
    };
};

// get logs from server
export const getComs = id => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/api/v0/commentary?item=${id}`);
        let data = await res.json();
        data = data.data.data;

        dispatch({
            type: GET_COMS,
            payload: data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: COM_ERROR,
            payload: err.response
        });
    }
};