import { useState } from "react";
import { useDispatch } from "react-redux";
import _ from "lodash";

import { addPartner, addLogoFile } from "../actions/partner";
import { setAlert } from "../actions/alert";
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

  const types = ["image/jpeg", "image/png"];

  const onChange = (e) => {
    let singleFileName;
    let newFileName;
    if (e.target.name === "url") {
      simpleURL = urlPartnerForm.value.split("//").pop();
      setFormData({ ...formData, url: simpleURL });
    } else if (e.target.name === "sampleFile") {
      logoInput.files[0] &&
        (!types.includes(logoInput.files[0].type) // To check if the extension is valid
          ? (dispatch(
              setAlert(
                "Veuillez importer une image (jpeg ou png)",
                "danger",
                blockID
              )
            ),
            (logoInput.value = null))
          : (newFileName = _.random([1], [9999]) + "_"), // Generate random number in case of identic file name
        (singleFileName = logoInput.value.split("\\").pop()), // Delete path in file name
        (newFileName += singleFileName.split(" ").join("_")), // Replace space by "_" in file name and concatenate random number with file name
        setFormData({
          ...formData,
          image: newFileName,
        }));
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    toggleShowAddPartner(!showAddPartner);
    dispatch(addLogoFile(logoInput.files[0], formData.image));
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
            id='logoInput'
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
