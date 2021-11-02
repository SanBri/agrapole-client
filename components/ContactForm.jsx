// import emailjs from "emailjs-com";

import Input from "./common/Input";

const contactForm = () => {
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_to3ztpi",
  //       "quote_form",
  //       "#quoteForm",
  //       "user_tPwTDDRHO46YX75BGkbxn"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <form className='contact-form' id='contactForm' /* onSubmit={sendEmail} */>
      <div className='contact-form__names'>
        <Input name='name' label='Votre Nom' placeholder='Entrez votre nom' />
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
        />
      </div>
      <div className='contact-form__submit'>
        <Input type='submit' value='Envoyer' />
      </div>
    </form>
  );
};

export default contactForm;
