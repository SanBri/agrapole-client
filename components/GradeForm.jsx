import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGrades, editGrade } from "../actions/grade";

import Button from "./common/Button";
import Input from "./common/Input";

const gradeForm = ({ gradeID, blockID }) => {
  const dispatch = useDispatch();
  const [showEditGrade, toggleshowEditGrade] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    average: "",
    scale: "",
  });

  useEffect(() => {
    dispatch(getGrades());
  }, [dispatch]);

  let data = null;

  data = useSelector((state) =>
    state.gradeReducer.grades.find((e) => e._id === gradeID)
  );

  useEffect(() => {
    if (data) {
      setFormData((formData) => ({
        ...formData,
        title: data.title,
        average: data.average,
        scale: data.scale,
      }));
    }
  }, [data]);

  useEffect(() => {
    if (showEditGrade) {
      document.getElementById(data._id).style.display = "none";
      setFormData((formData) => ({
        ...formData,
        title: data.title,
        average: data.average,
        scale: data.scale,
      }));
    } else {
      document.getElementById(data._id).style.display = "flex";
    }
  }, [showEditGrade]);

  const { title, average, scale } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toggleshowEditGrade(!showEditGrade);
    dispatch(editGrade(formData, data.name, blockID));
    dispatch(getGrades());
    dispatch(getGrades());
  };

  let editButtonText;
  !showEditGrade ? (editButtonText = "Modifier") : (editButtonText = "Annuler");

  return (
    <>
      <Button
        className='edit'
        text={editButtonText}
        onClick={(e) => toggleshowEditGrade(!showEditGrade)}
      ></Button>
      {showEditGrade ? (
        <form
          className='grade-form'
          id={`gradeForm`}
          onSubmit={(e) => onSubmit(e)}
        >
          <Input
            type='text'
            name='title'
            label='Titre'
            placeholder='Rédigez le titre'
            value={title}
            onChange={(e) => onChange(e)}
            maxLength='50'
          />
          <div className='grade-form__numbers'>
            <Input
              type='number'
              name='average'
              label='Note Moyenne'
              value={average}
              min={0}
              max={scale}
              step='0.1'
              maxLength='3'
              onChange={(e) => onChange(e)}
            />
            /
            <Input
              type='number'
              name='scale'
              label='Barème'
              value={scale}
              onChange={(e) => onChange(e)}
              min='5'
              max='100'
              maxLength='3'
            />
          </div>
          <Input type='submit' value='Enregistrer' />
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default gradeForm;
