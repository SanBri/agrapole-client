import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";

import Input from "../components/common/Input";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const router = useRouter();

  const [formData, setformData] = useState({
    mail: "",
    password: "",
  });
  const { mail, password } = formData;

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ mail, password }));
    document.getElementById("password").value = "";
  };

  isAuthenticated && router.push("/");

  return (
    <form id='loginForm' onSubmit={(e) => onSubmit(e)}>
      <Input
        name='mail'
        label='Adresse e-mail'
        placeholder='Votre adresse e-mail'
        type='email'
        onChange={(e) => onChange(e)}
      />
      <Input
        name='password'
        label='Mot de passe'
        placeholder='Votre mot de passe'
        type='password'
        id='password'
        onChange={(e) => onChange(e)}
      />
      <Input type='submit' value='Se connecter' />
      <Input type='button' value='Annuler' />
    </form>
  );
};

export default LoginForm;
