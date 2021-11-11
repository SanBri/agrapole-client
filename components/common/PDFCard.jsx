import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

import { deletePDFCard } from "../../actions/PDFCard";

import Button from "./Button";
import PDFCardForm from "../PDFCardForm";

const PDFCard = ({ id, block, title = "Titre", link = "#", admin = false }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [showForm, toggleShowForm] = useState(false);

  let editButtonText;
  !showForm ? (editButtonText = "Modifier") : (editButtonText = "Annuler");

  let classDefinition = "PDF-card";
  admin && (classDefinition += " admin");

  const deletePDFCardClick = () => {
    if (
      window.confirm(
        `Voulez-vous vraiment supprimer définitivement le fichier "${title}" ?`
      )
    ) {
      dispatch(deletePDFCard(id));
      setTimeout(() => {
        router.reload("/dashboard");
      }, 1000);
    }
  };

  return (
    <div className={classDefinition}>
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
          <div className='PDF-card__line'></div>
          <div className='PDF-card__admin'>
            <Button
              className='edit'
              text={editButtonText}
              onClick={(e) => toggleShowForm(!showForm)}
            />
            {!showForm && (
              <Button
                className='delete'
                text='Supprimer'
                onClick={(e) => deletePDFCardClick()}
              />
            )}
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
