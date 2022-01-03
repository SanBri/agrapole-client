import axios from "axios";

import { GET_FOOTER, EDIT_FOOTER, FOOTER_ERROR } from "./types";
import { setAlert } from "./alert";

// Get Footer
export const getFooter = () => async (dispatch) => {
  try {
    let res = await axios.get(`${process.env.URL}/footer/`);
    dispatch({
      type: GET_FOOTER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FOOTER_ERROR,
      payload: {
        msg: err.response,
        status: err.response,
      },
    });
  }
};

// Edit Footer
export const editFooter = (formData, blockID) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await axios.put(`${process.env.URL}/footer/`, formData, config);
    dispatch({
      type: EDIT_FOOTER,
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
      type: FOOTER_ERROR,
      payload: {
        msg: err.response,
        status: err.response,
      },
    });
  }
};
