import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { addPDFCard, getPDFCard } from "../actions/PDFCard";
import Button from "./common/Button";
import Input from "./common/Input";

const PDFCardForm = ({
  whichBlock,
  id,
  blockID,
  maximumPDFCards = false,
  edit = false,
  inPDFCard = false,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [showAddPDFCard, toggleshowAddPDFCard] = useState(edit);
  const [loading, setLoading] = useState(false);
  let submitButtonText;
  inPDFCard
    ? (submitButtonText = "Enregistrer")
    : (submitButtonText = "Envoyer");

  const [formData, setFormData] = useState({
    title: "",
    PDF: "",
    block: whichBlock,
  });

  useEffect(() => {
    id && dispatch(getPDFCard(id));
  }, [dispatch]);

  let pdfCard = null;

  edit && (pdfCard = useSelector((state) => state.PDFCardReducer.PDFCard));

  useEffect(() => {
    if (pdfCard) {
      setFormData((formData) => ({
        ...formData,
        title: pdfCard.title,
        PDF: pdfCard.PDF,
        block: pdfCard.block,
      }));
    }
  }, [pdfCard]);

  const { title, PDF } = formData;

  const onChange = (e) => {
    if (e.target.name === "PDF") {
      let newFileName = fileInput.value.split("\\").pop();
      setFormData({
        ...formData,
        PDF: newFileName,
      });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(!loading);
    toggleshowAddPDFCard(!showAddPDFCard);
    !id
      ? dispatch(addPDFCard(formData, null, blockID))
      : dispatch(addPDFCard(formData, id, blockID, true));
    setTimeout(() => {
      router.reload("/dashboard");
    }, 1000);
  };

  let addButtonText;
  !showAddPDFCard
    ? (addButtonText = "Ajouter un PDF")
    : (addButtonText = "Annuler");

  return (
    <>
      {!inPDFCard &&
        (!maximumPDFCards && !loading ? (
          <Button
            className='addPDFButton'
            text={addButtonText}
            onClick={(e) => toggleshowAddPDFCard(!showAddPDFCard)}
          ></Button>
        ) : !loading ? (
          <p className='info italic'>
            Le nombre maximum de fichier PDF pour cette fenêtre est atteint,
            supprimez-en pour en ajouter de nouveaux
          </p>
        ) : (
          ""
        ))}
      {showAddPDFCard ? (
        <form
          className='PDFCard-form'
          id='pdfCardForm'
          onSubmit={(e) => onSubmit(e)}
        >
          <Input
            name='title'
            label='Titre'
            placeholder='Titre du fichier PDF'
            type='text'
            value={title}
            onChange={(e) => onChange(e)}
          />
          <Input
            name='PDF'
            id='fileInput'
            label='Fichier PDF'
            type='file'
            accept='.pdf'
            onChange={(e) => onChange(e)}
            required={!edit}
          />
          {inPDFCard && (
            <p className='small'>
              <span className='bold'>Fichier actuel :</span> {PDF}
            </p>
          )}
          <Input type='submit' value={submitButtonText} />
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default PDFCardForm;
