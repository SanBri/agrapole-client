import Head from "next/head";
import Link from "next/link";

import Card from "./Card";
import Button from "./Button";

const SettingsLayout = ({ title, icon, backLink, children }) => {
  return (
    <>
      <Head>
        <title>FRSEA AuRA | {title}</title>
      </Head>
      <div className='settings'>
        <div className='settings__title'>
          <h1>
            <i className={icon}></i> {title}
          </h1>
        </div>
        <div className='settings__content'>
          <Card>{children}</Card>
        </div>
        <div className='settings__button'>
          <Link href={backLink}>
            <a>
              <Button text='Retour' />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SettingsLayout;
