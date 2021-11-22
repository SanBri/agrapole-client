import { useState } from "react";
import { useDispatch } from "react-redux";

import { addPartner } from "../actions/partner";
import Button from "./common/Button";
import Input from "./common/Input";

const PartnerForm = ({ blockID }) => {
  const dispatch = useDispatch();

  const [showAddPartner, toggleShowAddPartner] = useState(false);

  const initialState = {
    name: "",
    image: "",
    url: "",
  };

  const [formData, setFormData] = useState(initialState);

  const { name, image, url } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toggleShowAddPartner(!showAddPartner);
    dispatch(addPartner(formData, blockID));
    setFormData(initialState);
  };

  const onClick = (e) => {
    toggleShowAddPartner(!showAddPartner);
    setFormData(initialState);
  };

  let addButtonText;
  !showAddPartner
    ? (addButtonText = "Ajouter un partenaire")
    : (addButtonText = "Annuler");

  return (
    <>
      <Button
        className='add'
        text={addButtonText}
        onClick={(e) => onClick(e)}
      ></Button>
      {showAddPartner ? (
        <form
          className='partner-form'
          id='partnerForm'
          onSubmit={(e) => onSubmit(e)}
          encType='multipart/form-data'
        >
          <Input
            id='namePartnerForm'
            type='text'
            name='name'
            label='Nom'
            placeholder='Indiquez le nom du partenaire'
            maxLength={35}
            value={name}
            onChange={(e) => onChange(e)}
          />
          <Input
            type='url'
            name='url'
            label='Site Web du partenaire'
            placeholder='FORMAT : www.exemple.com'
            pattern='www.*'
            value={url}
            onChange={(e) => onChange(e)}
            required={false}
            maxLength={40}
          />
          <Input
            name='sampleFile'
            id='fileInput'
            label='Logo du partenaire'
            type='file'
            onChange={(e) => onChange(e)}
            required={false}
          />
          <Input type='submit' value='Ajouter' />
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default PartnerForm;
