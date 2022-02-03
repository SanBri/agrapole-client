import Link from "next/link";

const Footer = ({ data, admin = false }) => {
  const { content, mail } = data;

  let classDefinition = {};

  admin
    ? (classDefinition = {
        global: "footer-admin",
        content: "footer-admin__content",
      })
    : (classDefinition = {
        global: "footer",
        content: "footer__content",
      });

  return (
    <footer>
      {data ? (
        <div className={classDefinition.global} id='footer'>
          <div className={classDefinition.content}>
            {admin && <label>Adresse e-mail de contact actuelle :</label>}
            <a href={`mailto:${mail}`}>
              <p>
                <span className='colored bold'>{mail}</span>
              </p>
            </a>
            {admin && <label>Contenu actuel :</label>}
            <p>{content}</p>
            {!admin && (
              <div className='signature'>
                <p>
                  <Link href='http://www.sanb.fr'>
                    <a target='_blank' rel='noopener noreferrer'>
                      Site Web par Sandro Brignoli 💭
                    </a>
                  </Link>
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </footer>
  );
};

export default Footer;
