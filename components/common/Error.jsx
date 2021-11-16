import Link from "next/link";

import Card from "./Card";
import Button from "./Button";

const Error = ({ text, link = "/" }) => {
  return (
    <Card>
      <div className='error'>
        <div className='error__text'>
          <h5>
            <span className='colored'>Erreur</span> : {text}
          </h5>
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
