import axios from "axios";

import { setAlert } from "./alert";
import { loadUser } from "./auth";

// Edit Password or Mail
export const editUser = (type, formData, id, blockID) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (type === "editPassword") {
      await axios.put(
        `${process.env.URL}/users/password/${id}`,
        formData,
        config
      );
      dispatch(
        setAlert("Le mot de passe a bien été modifié", "success", blockID)
      );
    } else if (type === "editMail") {
      await axios.put(`${process.env.URL}/users/mail/${id}`, formData, config);
      dispatch(
        setAlert("L'adresse mail bien été modifiée", "success", blockID)
      );
      dispatch(loadUser()); // To update the mail in the state/store
    }
    return true;
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        dispatch(setAlert(error.msg, "danger", blockID))
      );
    }
  }
};
