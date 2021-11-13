import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getHero, editHero } from "../actions/hero";
import Button from "./common/Button";
import Input from "./common/Input";

const heroForm = ({ blockID }) => {
  const dispatch = useDispatch();

  const [showEditHero, toggleshowEditHero] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    catchphrase: "",
    description: "",
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
      }));
    } else {
      document.getElementById("hero").style.display = "flex";
    }
  }, [showEditHero]);

  const { title, catchphrase, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toggleshowEditHero(!showEditHero);
    dispatch(editHero(formData, blockID));
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
          <Input
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
          />
          <Input
            type='textarea'
            name='description'
            label='Description'
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
