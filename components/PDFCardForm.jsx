import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import _ from "lodash";

import { addPDFFile, addPDFCard, getPDFCard } from "../actions/PDFCard";
import { setAlert } from "../actions/alert";
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
    let singleFileName;
    let newFileName;
    if (e.target.name === "sampleFile") {
      fileInput.files[0] && fileInput.files[0].type != "application/pdf"
        ? (dispatch(
            setAlert(
              "Veuillez importer un fichier au format PDF",
              "danger",
              blockID
            )
          ),
          (fileInput.value = null))
        : fileInput.files[0] &&
          ((newFileName = _.random([1], [9999]) + "_"), // Generate random number in case of identic file name
          (singleFileName = fileInput.value.split("\\").pop()), // Delete path in file name
          (newFileName += singleFileName.split(" ").join("_")), // Replace space by "_" in file name and concatenate random number with file name
          setFormData({
            ...formData,
            PDF: newFileName,
          }));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(!loading);
    !id
      ? dispatch(addPDFFile(fileInput.files[0], formData.PDF))
      : dispatch(addPDFFile(fileInput.files[0], formData.PDF, id));
    !id
      ? dispatch(addPDFCard(formData, null, blockID))
      : dispatch(addPDFCard(formData, id, blockID, true));
    toggleshowAddPDFCard(!showAddPDFCard),
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
        (!loading && whichBlock === "B" && maximumPDFCards ? (
          <p className='info italic'>
            Le nombre maximum de fichier PDF pour cette fenêtre est atteint,
            supprimez-en pour en ajouter de nouveaux
          </p>
        ) : (
          <Button
            className='add'
            text={addButtonText}
            onClick={(e) => toggleshowAddPDFCard(!showAddPDFCard)}
          ></Button>
        ))}
      {showAddPDFCard ? (
        <form
          className='PDFCard-form'
          id='pdfCardForm'
          onSubmit={(e) => onSubmit(e)}
          encType='multipart/form-data'
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
            name='sampleFile'
            id='fileInput'
            label='Fichier PDF'
            type='file'
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
