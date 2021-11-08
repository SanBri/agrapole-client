import { GET_PDFCARDS, PDFCARDS_ERROR } from "../actions/types";

const initialState = {
  PDFCards: [],
  loading: true,
  error: {},
};

const PDFCardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PDFCARDS:
      return {
        ...state,
        PDFCards: payload,
        loading: false,
      };
    case PDFCARDS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default PDFCardReducer;
