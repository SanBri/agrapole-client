import { GET_HERO, EDIT_HERO, HERO_ERROR } from "../actions/types";

const initialState = {
  hero: {},
  loading: true,
  error: {},
};

const heroReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HERO:
    case EDIT_HERO:
      return {
        ...state,
        hero: payload,
        loading: false,
      };
    case HERO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default heroReducer;
