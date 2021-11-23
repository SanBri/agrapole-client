import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";

import { getPDFCards, deletePDFCard } from "../../actions/PDFCard";

import Button from "./Button";
import PDFCardForm from "../PDFCardForm";

const PDFCard = ({
  id,
  block,
  blockID,
  title = "Titre",
  link = "#",
  admin = false,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [randomID] = useState(uuidv4());
  let data;

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
      dispatch(deletePDFCard(id, blockID));
      setTimeout(() => {
        router.reload("/dashboard");
      }, 1000);
    }
  };

  useEffect(() => {
    dispatch(getPDFCards(block, id));
  }, [dispatch]);

  data = useSelector((state) =>
    state.PDFCardReducer.PDFCards.find((e) => e.id === randomID)
  );

  return (
    <div className={classDefinition}>
      {!showForm && (
        <>
          <h5>{title}</h5>
          <Link href={link}>
            <a target='_blank' rel='noopener noreferrer'>
              <Button className='pdf-button' text='Voir le PDF' />
            </a>
          </Link>
        </>
      )}
      {admin && (
        <>
          <div className='line'></div>
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
            <PDFCardForm
              id={id}
              whichBlock={block}
              blockID={blockID}
              edit
              inPDFCard
            />
          )}
        </>
      )}
    </div>
  );
};

export default PDFCard;
