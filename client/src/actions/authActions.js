import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT
} from "./types";
import axios from "axios";




export const login = data => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    try {
        loadUser();
        const res = await axios.post("/api/v0/users/login", data, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
       
        return res ;
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data
        });
        return err ; 
    }
};

// Load User
export const loadUser = () => async dispatch => {
    try {
        const res = await axios.get("/api/v0/users/auth");
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({ type: AUTH_ERROR });
    }
};

// LOG OUT
export const logout = () => async dispatch => {
    await axios.get("/api/v0/users/logout");
    dispatch({ type: LOGOUT });
};

