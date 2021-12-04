import { GET_GRADES, EDIT_GRADE, GRADE_ERROR } from "../actions/types";

const initialState = {
  grades: [],
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
    case EDIT_GRADE:
      return {
        ...state,
        grades: payload,
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
