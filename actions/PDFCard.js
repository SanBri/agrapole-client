import axios from "axios";

import {
  GET_PDFCARDS,
  GET_PDFCARD,
  LOAD_PDFCARDS,
  ADD_PDFCARD,
  DELETE_PDFCARD,
  PDFCARDS_ERROR,
} from "./types";

import { setAlert } from "./alert";

// Get All PDFCards by block
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

// Get a PDFCard
export const getPDFCard = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.URL}/pdfCards/pdfCard/${id}`);
    dispatch({
      type: GET_PDFCARD,
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

// Add or Edit a PDFCard
export const addPDFCard =
  (formData, id, blockID, edit = false) =>
  async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      if (!edit) {
        let res = await axios.post(
          `${process.env.URL}/pdfCards/`,
          formData,
          config
        );
        dispatch({
          type: ADD_PDFCARD,
          payload: res.data,
        });
        dispatch(
          setAlert("La fichier PDF a bien été créé", "success", blockID)
        );
      } else {
        await axios.put(`${process.env.URL}/pdfCards/${id}`, formData, config);
        dispatch(
          setAlert(
            "Les modifications ont bien été enregistrées",
            "success",
            blockID
          )
        );
      }
      dispatch({
        type: LOAD_PDFCARDS,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) =>
          dispatch(setAlert(error.msg, "danger", blockID))
        );
      }
      dispatch({
        type: PDFCARDS_ERROR,
        payload: {
          msg: err.response,
          status: err.response,
        },
      });
    }
  };

// Delete a PDF Card
export const deletePDFCard = (id, blockID) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.URL}/pdfCards/${id}`);
    dispatch({
      type: DELETE_PDFCARD,
      payload: id,
    });
    dispatch({
      type: LOAD_PDFCARDS,
    });
    dispatch(
      setAlert("Le fichier PDF a bien été supprimé", "success", blockID)
    );
  } catch (err) {
    dispatch({
      type: PDFCARDS_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status,
      },
    });
  }
};

// POST PDF FILE :
export const addPDFFile =
  (PDFFile, newFileName, id = null) =>
  async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    if (PDFFile) {
      let PDFFileObject = new FormData();
      PDFFileObject.append("pdfFile", PDFFile);
      PDFFileObject.append("newFileName", newFileName);
      if (!id) {
        await axios.post(
          `${process.env.URL}/pdfCards/pdfFile/`,
          PDFFileObject,
          config
        );
      } else {
        await axios.put(
          `${process.env.URL}/pdfCards/pdfFile/${id}`,
          PDFFileObject,
          config
        );
      }
    }
    dispatch({
      type: LOAD_PDFCARDS,
    });
  };
