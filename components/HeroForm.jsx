import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHero, editHero } from "../actions/hero";
import { addPDFFile } from "../actions/PDFCard";
import { setAlert } from "../actions/alert";
import Button from "./common/Button";
import Input from "./common/Input";

const heroForm = ({ blockID }) => {
  const dispatch = useDispatch();

  const [showEditHero, toggleshowEditHero] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    catchphrase: "",
    description: "",
    PDF: "",
  });

  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);

  let hero = null;

  hero = useSelector((state) => state.heroReducer.hero);

  useEffect(() => {
    if (hero) {
      setFormData((formData) => ({
        ...formData,
        title: hero.title,
        catchphrase: hero.catchphrase,
        description: hero.description,
        PDF: hero.PDF,
      }));
    }
  }, [hero]);

  useEffect(() => {
    if (showEditHero) {
      document.getElementById("hero").style.display = "none";
      setFormData((formData) => ({
        ...formData,
        title: hero.title,
        catchphrase: hero.catchphrase,
        description: hero.description,
        PDF: hero.PDF,
      }));
    } else {
      document.getElementById("hero").style.display = "flex";
    }
  }, [showEditHero]);

  const { title, catchphrase, description, PDF } = formData;

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
    toggleshowEditHero(!showEditHero);
    fileInput.files[0] &&
      dispatch(addPDFFile(fileInput.files[0], formData.PDF, hero._id));
    setTimeout(() => {
      dispatch(editHero(formData, blockID));
    }, 500);
  };

  let editButtonText;
  !showEditHero ? (editButtonText = "Modifier") : (editButtonText = "Annuler");

  return (
    <>
      <Button
        className='edit'
        text={editButtonText}
        onClick={(e) => toggleshowEditHero(!showEditHero)}
      ></Button>
      {showEditHero ? (
        <form className='hero-form' id='heroForm' onSubmit={(e) => onSubmit(e)}>
          {/* <Input
            type='text'
            name='title'
            label='Titre'
            placeholder='Rédigez le titre'
            value={title}
            onChange={(e) => onChange(e)}
          />
          <Input
            type='text'
            name='catchphrase'
            label='Sous-Titre'
            placeholder='Rédigez le sous-titre'
            value={catchphrase}
            onChange={(e) => onChange(e)}
          /> */}
          <Input
            name='sampleFile'
            id='fileInput'
            label='Fichier PDF'
            type='file'
            onChange={(e) => onChange(e)}
            required={false}
          />
          <p className='small'>
            <span className='bold'>Fichier actuel :</span> {PDF}
          </p>
          <div className='line'></div>
          <Input
            type='textarea'
            name='description'
            label='Qui sommes-nous ?'
            placeholder='Rédigez la description'
            value={description}
            onChange={(e) => onChange(e)}
            maxLength={830}
          />
          <Input type='submit' value='Enregistrer' />
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default heroForm;
