import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='footer__content'>
          <a href='mailto:formation@frsea-aura.fr'>
            <p>
              <span className='colored bold'>formation@frsea-aura.fr</span>
            </p>
          </a>
          <p>© Décembre 2021</p>
          <p>FRSEA Auvergne Rhône-Alpes</p>
          <p> N° SIRET : 824 171 912 00010</p>
          <p>
            Déclaration d’activité de formation auprès du Préfet de la région
            Auvergne-Rhône-Alpes sous le numéro 84691529169
          </p>
          <div className='signature'>
            <p>
              <Link href='http://www.sanb.fr'>
                <a target='_blank' rel='noopener noreferrer'>
                  Site Web par SanB 💭
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
