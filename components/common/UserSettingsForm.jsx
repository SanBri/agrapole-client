import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

import { setAlert } from "../../actions/alert";
import { editUser } from "../../actions/user";

import Alert from "../layout/Alert";
import SettingsLayout from "./SettingsLayout";
import Input from "./Input";
import Spinner from "./Spinner";

const UserSettingsForm = ({ type, title }) => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.authReducer.user);
  const [id] = useState(uuidv4());
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  console.log(user.mail);

  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    passwordConfirmation: "",
    mail: user.mail,
    password: "",
  });

  const { mail, password, oldPassword, newPassword, passwordConfirmation } =
    formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const dispatchAction = () => {
    let isSuccess = dispatch(editUser(type, formData, user._id, id));
    isSuccess.then((result) => {
      result === true
        ? (setLoading(true),
          setTimeout(() => {
            router.push("/settings");
          }, 2000))
        : "";
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    type === "editPassword"
      ? newPassword !== passwordConfirmation
        ? (dispatch(
            setAlert(
              "Les 2 mots de passe doivent être identiques",
              "danger",
              id
            )
          ),
          setFormData({
            ...formData,
            passwordConfirmation: "",
          }))
        : dispatchAction()
      : type === "editMail"
      ? dispatchAction()
      : "";
  };

  return (
    <SettingsLayout title={title} backLink='/settings'>
      <div>
        <Alert blockID={id} />
        {loading ? (
          <Spinner />
        ) : type === "editPassword" ? (
          <form id='editPasswordForm' onSubmit={(e) => onSubmit(e)}>
            <Input
              name='oldPassword'
              label='Mot de passe actuel'
              placeholder='Votre mot de passe actuel'
              type='password'
              value={oldPassword}
              onChange={(e) => onChange(e)}
            />
            <Input
              name='newPassword'
              label='Nouveau mot de passe'
              placeholder='Votre nouveau mot de passe'
              type='password'
              value={newPassword}
              fas
              fa-user-lock
              onChange={(e) => onChange(e)}
            />
            <Input
              name='passwordConfirmation'
              label='Confirmation du nouveau mot de passe'
              placeholder='Confirmez votre nouveau mot de passe'
              type='password'
              value={passwordConfirmation}
              onChange={(e) => onChange(e)}
            />
            <Input type='submit' value='Enregistrer' />
          </form>
        ) : type === "editMail" ? (
          <form id='editMailForm' onSubmit={(e) => onSubmit(e)}>
            <Input
              name='mail'
              label='Adresse e-mail'
              placeholder='Entrez votre nouvelle adresse e-mail'
              type='email'
              value={mail}
              onChange={(e) => onChange(e)}
            />
            <Input
              name='password'
              label='Mot de passe'
              placeholder='Votre mot de passe'
              type='password'
              value={password}
              onChange={(e) => onChange(e)}
            />
            <Input type='submit' value='Enregistrer' />
          </form>
        ) : (
          ""
        )}
      </div>
    </SettingsLayout>
  );
};

export default UserSettingsForm;
