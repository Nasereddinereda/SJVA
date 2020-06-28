import {
    // GET_ITEMS,
    // SEARCH_LOGS,
    // SET_LOADING,
    REG_ERROR,
    REG_LOADING,
    ADD_REG , 
    GET_REGS , 
    GET_EV_REGS , 
    SEARCH_REGS , 
    REG_DELETE , 
    REG_CONFIRM
    // GET_EVENTS,
    // DELETE_LOG,
    // SET_CURRENT,
    // CLEAR_CURRENT,
    // UPDATE_LOG
} from "./types";

// get logs from server
export const getRegs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch("/api/v0/registration?mode=card&confirm=false");
        let data = await res.json();
        data = data.data.data;
        dispatch({
            type: GET_REGS,
            payload: data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: REG_ERROR,
            payload: err.response
        });
    }
};

export const getEvRegs = id => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/api/v0/registration?event=${id}`);
        let data = await res.json();
        data = data.data.data;
        dispatch({
            type: GET_EV_REGS,
            payload: data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: REG_ERROR,
            payload: err.response
        });
    }
};

// Search
export const searchReg = (text , bool) => async dispatch => {

    try {
        // console.log(text,bool);
        setLoading();
        let myData = [];

            let res ; 
            if(bool === true){
            res = await fetch(`/api/v0/registration?mode=card&confirm=true`);
            } else {
            res = await fetch(`/api/v0/registration?mode=card&confirm=false`);
            }

            
            let data = await res.json();
            data = data.data.data;
            data.forEach(elm => {
                if (elm.last_name.includes(text) || elm.first_name.includes(text) || elm.email.includes(text) || elm.phone.includes(text)) {
                    myData.push(elm);
                }
            });

        dispatch({
            type: SEARCH_REGS,
            payload: myData
        });
    } catch (err) {
        dispatch({
            type: REG_ERROR,
            payload: err.response
        });
    }
}; 

// add new log
export const addReg = (log) => async dispatch => {
    try {
        setLoading();

        const res = await fetch("/api/v0/registration", {
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json"
            }
        });



        const data = await res.json();
        dispatch({
            type: ADD_REG,
            payload: data
        });

        return data ; 
    } catch (err) {
        dispatch({
            type: REG_ERROR,
            payload: err.response
        });
        return err ; 
    }
};


// set loading to true
export const setLoading = () => {
    return {
        type: REG_LOADING
    };
};


export const deleteReg = (id) => async dispatch => {
    try {
        // await axios.delete(`/api/v0/registration/${id}`);
        // dispatch({ type: REG_DELETE, payload: id });

        await fetch(`/api/v0/registration/${id}`, {
            method: "DELETE"
        });

        dispatch({
            type: REG_DELETE,
            payload: id
        });
    } catch (err) {
        // dispatch({ type: REG_ERROR, payload: err.response.msg });
        dispatch({
            type: REG_ERROR,
            payload: err.response
        });
    }
};


export const confirmReg = (id) => async dispatch => {
    try {

        let log = {confirm:"true"} ;
        await fetch(`/api/v0/registration/${id}`, {
            method: "PATCH",
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json"
            }
        });

        dispatch({
            type: REG_CONFIRM,
            payload: id
        });
    } catch (err) {
        // dispatch({ type: REG_ERROR, payload: err.response.msg });
        dispatch({
            type: REG_ERROR,
            payload: err.response
        });
    }
};