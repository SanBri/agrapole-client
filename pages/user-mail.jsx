import PrivatePage from "../components/layout/PrivatePage";
import UserSettingsForm from "../components/common/UserSettingsForm";

const userMail = () => {
  return (
    <>
      <UserSettingsForm
        type='editMail'
        title="Modification de l'adresse e-mail"
      />
    </>
  );
};

export default PrivatePage(userMail);
