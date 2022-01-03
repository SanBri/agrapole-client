import { GET_FOOTER, EDIT_FOOTER, FOOTER_ERROR } from "../actions/types";

const initialState = {
  footer: {},
  loading: true,
  error: {},
};

const FooterReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_FOOTER:
    case EDIT_FOOTER:
      return {
        ...state,
        footer: payload,
        loading: false,
      };
    case FOOTER_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default FooterReducer;
