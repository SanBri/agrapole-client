import ContactForm from "./ContactForm";
import Alert from "./layout/Alert";

const Contact = () => {
  return (
    <section>
      <Alert blockID='contactForm' />
      <div className='contact'>
        <div className='contact__content'>
          <div className='contact__content-image'>
            <img src='/contact.jpg' width='100%' alt='contact' />
          </div>
          <div className='contact__content-text'>
            <div className='contact__content-text-title'>
              <h4>Nous Contacter</h4>
            </div>
            <div className='contact__content-text-form'>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
