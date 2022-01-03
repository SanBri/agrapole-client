import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFooter, editFooter } from "../actions/footer";
import Button from "./common/Button";
import Input from "./common/Input";

const footerForm = ({ data, blockID }) => {
  const dispatch = useDispatch();

  const [showEditFooter, toggleshowEditFooter] = useState(false);

  const [formData, setFormData] = useState({
    mail: data.mail,
    content: data.content,
  });

  useEffect(() => {
    if (showEditFooter) {
      document.getElementById("footer").style.display = "none";
      setFormData((formData) => ({
        ...formData,
        mail: footer.mail,
        content: footer.content,
      }));
    } else {
      document.getElementById("footer").style.display = "flex";
    }
  }, [showEditFooter]);

  const { mail, content } = formData;

  useEffect(() => {
    dispatch(getFooter());
  }, [dispatch]);

  let footer = null;

  footer = useSelector((state) => state.footerReducer.footer);

  useEffect(() => {
    if (footer) {
      setFormData((formData) => ({
        ...formData,
        mail: footer.mail,
        content: footer.content,
      }));
    }
  }, [footer]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toggleshowEditFooter(!showEditFooter);
    dispatch(editFooter(formData, blockID));
  };

  let editButtonText;
  !showEditFooter
    ? (editButtonText = "Modifier")
    : (editButtonText = "Annuler");

  return (
    <>
      <Button
        className='edit'
        text={editButtonText}
        onClick={(e) => toggleshowEditFooter(!showEditFooter)}
      ></Button>
      {showEditFooter ? (
        <form
          className='footer-form'
          id='footerForm'
          onSubmit={(e) => onSubmit(e)}
        >
          <Input
            type='email'
            name='mail'
            label='Adresse E-mail'
            placeholder='Entrez une adresse e-mail de contact'
            value={mail}
            onChange={(e) => onChange(e)}
          />
          <Input
            type='textarea'
            name='content'
            label='Contenu'
            placeholder='Rédigez le contenu du Pied de Page'
            value={content}
            onChange={(e) => onChange(e)}
          />
          <Input type='submit' value='Enregistrer' />
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default footerForm;
