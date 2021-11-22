import { GET_PARTNERS, ADD_PARTNER, PARTNERS_ERROR } from "../actions/types";

const initialState = {
  partners: [],
  loading: true,
  error: {},
};

const partnerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PARTNERS:
      return {
        ...state,
        partners: payload,
        loading: false,
      };
    case ADD_PARTNER:
      return {
        ...state,
        partners: [...state.partners, payload],
        loading: false,
      };
    case PARTNERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default partnerReducer;
