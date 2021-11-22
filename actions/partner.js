import axios from "axios";

import { GET_PARTNERS, ADD_PARTNER, PARTNERS_ERROR } from "./types";

import { setAlert } from "./alert";

// Get All Partners
export const getPartners = () => async (dispatch) => {
  try {
    let res = await axios.get(`${process.env.URL}/partners/`);
    dispatch({
      type: GET_PARTNERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PARTNERS_ERROR,
      payload: {
        msg: err.response,
        status: err.response,
      },
    });
  }
};

// Add Partner
export const addPartner = (formData, blockID) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let res = await axios.post(
      `${process.env.URL}/partners/`,
      formData,
      config
    );
    dispatch({
      type: ADD_PARTNER,
      payload: res.data,
    });
    dispatch(setAlert("Le partenaire a bien été ajouté", "success", blockID));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        dispatch(setAlert(error.msg, "danger", blockID))
      );
    }
    dispatch({
      type: PARTNERS_ERROR,
      payload: {
        msg: err.response,
        status: err.response,
      },
    });
  }
};
