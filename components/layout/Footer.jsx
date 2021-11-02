import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer__content'>
          <p>© 2021</p>
          <p>Nom</p>
          <p>N° SIRET ------- </p>
          <div className='signature'>
            <p>
              <Link href='http://www.sanb.fr'>
                <a target='_blank' rel='noopener noreferrer'>
                  By SanB 💭
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
