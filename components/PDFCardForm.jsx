import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

import { addPDFCard, getPDFCard } from "../actions/PDFCard";
import Button from "./common/Button";
import Input from "./common/Input";

const PDFCardForm = ({ whichBlock, id, edit = false, inPDFCard = false }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [showAddPDFCard, toggleshowAddPDFCard] = useState(edit);

  const [formData, setFormData] = useState({
    title: "",
    PDF: "FICHIER PDF TEST",
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

  const { title, PDF, block } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    !id
      ? dispatch(addPDFCard(formData))
      : dispatch(addPDFCard(formData, id, true));
    console.log(formData.title);
    setTimeout(() => {
      router.reload("/dashboard");
    }, 1300);
  };

  let addButtonText;
  !showAddPDFCard
    ? (addButtonText = "Ajouter un PDF")
    : (addButtonText = "Annuler");

  return (
    <>
      {!inPDFCard && (
        <Button
          className='addPDFButton'
          text={addButtonText}
          onClick={(e) => toggleshowAddPDFCard(!showAddPDFCard)}
        ></Button>
      )}
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
          <Input type='submit' value='Envoyer' />
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default PDFCardForm;
