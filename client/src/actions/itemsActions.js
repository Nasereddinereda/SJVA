import {
    GET_ITEMS,
    GET_EVENTS,
    SEARCH_ITEMS,
    SET_LOADING,
    ITEMS_ERROR,
    ADD_ITEM,
    // DELETE_LOG,
    SET_CURRENT,
    // CLEAR_CURRENT,
    // UPDATE_LOG
} from "./types";
import axios from "axios";


// get logs from server
export const getItems = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch("/api/v0/items?mode=item" );
        let data = await res.json();
        data = data.data.data ; 

        dispatch({
            type: GET_ITEMS,
            payload: data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: ITEMS_ERROR,
            payload: err.response
        });
    }
};

export const getItem = id => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/api/v0/items/${id}` );
        let data = await res.json();
        data = data.data.data ; 
        // setCurrent(data);

        // See 
        if(data.mode === "item"){

            if (!window.localStorage.page){
            window.localStorage.setItem('page', data._id);
            const obj = {"see":data.see + 1} ;
                await fetch(`/api/v0/items/${data._id}`, {
                    method: "PATCH",
                    body: JSON.stringify(obj),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
            }else {
                let local = window.localStorage.getItem('page');
                local = local.split(",");

                if(!local.includes(data._id)){
                    local.push(data._id);
                    window.localStorage.setItem('page', local);
                    const obj = { "see": data.see + 1 };
                    await fetch(`/api/v0/items/${data._id}`, {
                        method: "PATCH",
                        body: JSON.stringify(obj),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                }

            }

            
            
        }




        dispatch({
            type: SET_CURRENT,
            payload: data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: ITEMS_ERROR,
            payload: err.response
        });
    }
};

// get logs from server
export const getEvents = () => async dispatch => {
    try {
        console.log(1223344455);
        setLoading();
        const res = await fetch("/api/v0/items?mode=event" );
        let data = await res.json();
        data = data.data.data ; 

        dispatch({
            type: GET_EVENTS,
            payload: data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: ITEMS_ERROR,
            payload: err.response
        });
    }
};

// add new log
export const addItem = (log ,formData ) => async dispatch => {
    try {
        setLoading();
    
    const res = await fetch("/api/v0/items", {
            method: "POST",
            body: JSON.stringify(log),
            headers: {
                "Content-Type": "application/json"
            }
        });
    
        await axios.post("/api/v0/items/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        

        const data = await res.json();
        dispatch({
            type: ADD_ITEM,
            payload: data
        }); 

        return data ; 
    } catch (err) {

        console.log("*********************************")
        dispatch({
            type: ITEMS_ERROR,
            payload: err.response
        });

        return err ; 
    }
};

// Search
export const searchItem = text => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/api/v0/items?mode=item`);
        let data = await res.json();
        data = data.data.data; 
        let myData = [] ; 

        data.forEach(elm => {
            if (elm.title.includes(text) || elm.discription.includes(text)){
            myData.push(elm); 
            }
        });

        dispatch({
            type: SEARCH_ITEMS,
            payload: myData
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

// set current log
export const setCurrent = item => {
    return {
        type: SET_CURRENT,
        payload: item
    };
};