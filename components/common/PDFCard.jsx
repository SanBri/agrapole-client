import Link from "next/link";

const PDFCard = ({ title = "Titre", link = "#" }) => {
  return (
    <div className='PDF-card'>
      <h5>{title}</h5>
      <Link href={link}>
        <a>
          <button>Voir le PDF</button>
        </a>
      </Link>
    </div>
  );
};

export default PDFCard;
