import PrivatePage from "../components/layout/PrivatePage";
import UserSettingsForm from "../components/common/UserSettingsForm";

const userPassword = () => {
  return (
    <>
      <UserSettingsForm
        type='editPassword'
        title='Modification du mot de passe'
      />
    </>
  );
};

export default PrivatePage(userPassword);
