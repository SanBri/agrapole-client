import {
  GET_GRADES,
  GET_GRADE,
  EDIT_GRADE,
  GRADE_ERROR,
} from "../actions/types";

const initialState = {
  grades: [],
  grade: null,
  loading: true,
  error: {},
};

const gradeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GRADES:
      return {
        ...state,
        grades: payload,
        loading: false,
      };
    case GET_GRADE:
      return {
        ...state,
        grades: payload,
        loading: false,
      };
    case EDIT_GRADE:
      return {
        ...state,
        grades: grades,
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
