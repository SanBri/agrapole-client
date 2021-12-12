import emailjs from "emailjs-com";
import { setAlert } from "../actions/alert";
import { useDispatch } from "react-redux";

import Input from "./common/Input";
import Alert from "./layout/Alert";

const contactForm = () => {
  const dispatch = useDispatch();
  const sendEmail = (e) => {
    e.preventDefault();
    let mailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.mail.value);
    e.target.name.value.length > 30
      ? dispatch(
          setAlert(
            "Le nom est trop long (30 caractères maximum)",
            "danger",
            "contactForm"
          ),
          (e.target.name.value = "")
        )
      : !mailCheck || e.target.mail.value.length > 254
      ? dispatch(
          setAlert(
            "Veuillez entrer une adresse e-mail valide",
            "danger",
            "contactForm"
          ),
          (e.target.mail.value = "")
        )
      : e.target.text.value.length > 700
      ? dispatch(
          setAlert(
            "Le message est trop long (700 caractères maximum)",
            "danger",
            "contactForm"
          )
        )
      : emailjs
          .sendForm(
            "service_he8y065",
            `${process.env.TEMPLATE_ID}`,
            "#contactForm",
            `${process.env.USER_ID}`
          )
          .then(
            (result) => {
              dispatch(
                setAlert(
                  "Votre message a bien été envoyé. Nous vous contacterons très prochainement par e-mail",
                  "success",
                  "successContactForm",
                  300000
                )
              );
              document.getElementById("contactForm").style.display = "none";
            },
            (error) => {
              dispatch(
                setAlert(
                  "Une erreur est survenue. Veuillez réessayer",
                  "danger",
                  "contactForm"
                )
              );
            }
          );
  };
  return (
    <>
      <Alert blockID='successContactForm' />
      <form className='contact-form' id='contactForm' onSubmit={sendEmail}>
        <div className='contact-form__names'>
          <Input
            name='name'
            label='Votre Nom'
            placeholder='Entrez votre nom'
            maxLength={30}
          />
          <Input
            name='mail'
            type='email'
            label='Votre E-mail'
            placeholder='Entrez votre e-mail'
          />
        </div>

        <div className='contact-form__text'>
          <Input
            type='textarea'
            name='text'
            label='Votre message'
            placeholder='Exprimez-vous...'
            maxLength={700}
          />
        </div>
        <div className='contact-form__submit'>
          <Input type='submit' value='Envoyer' />
        </div>
      </form>
    </>
  );
};

export default contactForm;
