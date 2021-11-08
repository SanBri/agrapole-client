import axios from "axios";

import { GET_PDFCARDS, PDFCARDS_ERROR } from "./types";

export const getPDFCards = (block) => async (dispatch) => {
  try {
    let res = await axios.get(`${process.env.URL}/pdfCards/${block}`);
    dispatch({
      type: GET_PDFCARDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PDFCARDS_ERROR,
      payload: {
        msg: err.response,
        status: err.response,
      },
    });
  }
};
