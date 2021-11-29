import axios from "axios";

import { GET_GRADE, EDIT_GRADE, GRADE_ERROR } from "./types";
import { setAlert } from "./alert";

// Get Grade
export const getGrade = () => async (dispatch) => {
  try {
    let res = await axios.get(`${process.env.URL}/grade/`);
    dispatch({
      type: GET_GRADE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GRADE_ERROR,
      payload: {
        msg: err.response,
        status: err.response,
      },
    });
  }
};

// Edit Grade
export const editGrade = (formData, blockID) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    formData.average = parseFloat(formData.average);
    formData.scale = parseFloat(formData.scale);
    let res = await axios.put(`${process.env.URL}/grade/`, formData, config);
    dispatch({
      type: EDIT_GRADE,
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
      type: GRADE_ERROR,
      payload: {
        msg: err.response,
        status: err.response,
      },
    });
  }
};
