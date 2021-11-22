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

  const { name, url } = formData;
  let simpleURL;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "url") {
      simpleURL = urlPartnerForm.value.split("//").pop();
      setFormData({ ...formData, url: simpleURL });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toggleShowAddPartner(!showAddPartner);
    console.log(simpleURL);
    console.log(formData);
    // dispatch(addPartner(formData, blockID));
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
            id='urlPartnerForm'
            type='text'
            name='url'
            label='Site Web du partenaire'
            placeholder='FORMAT : www.exemple.com'
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
