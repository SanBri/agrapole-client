import axios from "axios";

import setAuthToken from "../utils/setAuthToken";
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  if (typeof window !== "undefined") {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }

  try {
    const res = await axios.get(`${process.env.URL}/auth`);
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Login
export const login = { mail, password };
