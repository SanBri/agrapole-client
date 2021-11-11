import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

import PDFCardForm from "../PDFCardForm";

const PDFCard = ({ id, block, title = "Titre", link = "#", admin = false }) => {
  const [showForm, toggleShowForm] = useState(false);

  let editButtonText;
  !showForm ? (editButtonText = "Modifier") : (editButtonText = "Annuler");

  return (
    <div className='PDF-card'>
      {!showForm && (
        <>
          <h5>{title}</h5>
          <Link href={link}>
            <a>
              <Button className='pdf-button' text='Voir le PDF' />
            </a>
          </Link>
        </>
      )}
      {admin && (
        <>
          <div className='PDF-card__admin'>
            <Button
              className='edit'
              text={editButtonText}
              onClick={(e) => toggleShowForm(!showForm)}
            />
            {!showForm && <Button className='delete' text='Supprimer' />}
          </div>
          {showForm && (
            <PDFCardForm id={id} whichBlock={block} edit inPDFCard />
          )}
        </>
      )}
    </div>
  );
};

export default PDFCard;
