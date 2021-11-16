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

// Edit Hero
export const editHero = (formData, blockID) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await axios.put(`${process.env.URL}/hero/`, formData, config);
    dispatch({
      type: EDIT_HERO,
      payload: res.data,
    });
    dispatch(
      setAlert(
        "Les modifications ont bien été enregistrées",
        "success",
        blockID
      )
    );
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        dispatch(setAlert(error.msg, "danger", blockID))
      );
    }
    dispatch({
      type: HERO_ERROR,
      payload: {
        msg: err.response,
        status: err.response,
      },
    });
  }
};
