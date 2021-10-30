import Link from "next/link";
import Button from "./Button";

const PDFCard = ({ title = "Titre", link = "#" }) => {
  return (
    <div className='PDF-card'>
      <h5>{title}</h5>
      <Link href={link}>
        <a>
          <Button text='Voir le PDF' />
        </a>
      </Link>
    </div>
  );
};

export default PDFCard;
