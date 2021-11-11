import axios from "axios";

import { GET_HERO, EDIT_HERO, HERO_ERROR } from "./types";

import { setAlert } from "./alert";

// Get Hero
export const getHero = () => async (dispatch) => {
  try {
    let res = await axios.get(`${process.env.URL}/hero/`);
    dispatch({
      type: GET_HERO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: HERO_ERROR,
      payload: {
        msg: err.response,
        status: err.response,
      },
    });
  }
};
