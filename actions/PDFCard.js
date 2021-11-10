import axios from "axios";

import { GET_PDFCARDS, PDFCARDS_ERROR } from "./types";

export const getPDFCards = (block, id) => async (dispatch) => {
  try {
    let res = await axios.get(`${process.env.URL}/pdfCards/${block}`);
    const data = res.data;
    const payload = { id, data };
    dispatch({
      type: GET_PDFCARDS,
      payload: payload,
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
