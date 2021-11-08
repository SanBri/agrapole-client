import { combineReducers } from "redux";

import authReducer from "./auth";
import alertReducer from "./alert";
import PDFCardReducer from "./PDFCard";

export default combineReducers({
  authReducer,
  alertReducer,
  PDFCardReducer,
});
