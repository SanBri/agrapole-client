import axios from "axios";

import { GET_GRADES, GET_GRADE, GRADE_ERROR } from "./types";
import { setAlert } from "./alert";

// Get Grades
export const getGrades = () => async (dispatch) => {
  try {
    let res = await axios.get(`${process.env.URL}/grade/`);
    dispatch({
      type: GET_GRADES,
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

// Get a Grade by ID
export const getGrade = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${process.env.URL}/grade/${id}`);
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
export const editGrade = (formData, name, blockID) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    formData.average = parseFloat(formData.average);
    formData.scale = parseFloat(formData.scale);
    await axios.put(`${process.env.URL}/grade/${name}`, formData, config);
    dispatch(
      setAlert(
        "Les modifications ont bien été enregistrées",
        "success",
        blockID
      )
    );
    getGrades();
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
