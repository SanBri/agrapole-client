import { GET_GRADE, EDIT_GRADE, GRADE_ERROR } from "../actions/types";

const initialState = {
  grade: {},
  loading: true,
  error: {},
};

const gradeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GRADE:
    case EDIT_GRADE:
      return {
        ...state,
        grade: payload,
        loading: false,
      };
    case GRADE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default gradeReducer;
