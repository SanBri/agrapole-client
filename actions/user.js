import axios from "axios";

import { setAlert } from "./alert";

// Edit Password
export const editPassword = (formData, id, blockID) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.put(
      `${process.env.URL}/users/password/${id}`,
      formData,
      config
    );
    dispatch(
      setAlert("Le mot de passe a bien été modifié", "success", blockID)
    );
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
