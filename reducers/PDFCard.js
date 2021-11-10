import {
  GET_PDFCARDS,
  ADD_PDFCARD,
  PDFCARDS_ERROR,
  GET_PDFCARD,
} from "../actions/types";

const initialState = {
  PDFCards: [],
  PDFCard: null,
  loading: true,
  error: {},
};

const PDFCardReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PDFCARDS:
      state.PDFCards.push(payload);
      return {
        ...state,
        PDFCards: state.PDFCards,
        loading: false,
      };
    case GET_PDFCARD:
      return {
        ...state,
        PDFCard: payload,
        loading: false,
      };
    case ADD_PDFCARD:
      return {
        ...state,
        PDFCards: [payload, ...state.PDFCards],
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
