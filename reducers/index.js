import { combineReducers } from "redux";

import authReducer from "./auth";
import alertReducer from "./alert";
import PDFCardReducer from "./PDFCard";
import heroReducer from "./hero";
import partnerReducer from "./partner";
import gradeReducer from "./grade";
import footerReducer from "./footer";

export default combineReducers({
  authReducer,
  alertReducer,
  PDFCardReducer,
  heroReducer,
  partnerReducer,
  gradeReducer,
  footerReducer,
});
