import Link from "next/link";

import Card from "./Card";
import Button from "./Button";

const Error = ({ error, text = "Cette page n'existe pas", link = "/" }) => {
  return (
    <Card>
      <div className='error'>
        <div className='error__text'>
          <h4>
            <span className='colored'>Erreur {error}</span> : {text}
          </h4>
        </div>
        <div className='error__button'>
          <Link href={link}>
            <a>
              <Button text='Retour'></Button>
            </a>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default Error;
