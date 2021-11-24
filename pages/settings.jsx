import PrivatePage from "../components/layout/PrivatePage";
import SettingsLayout from "../components/common/SettingsLayout";
import LinkCard from "../components/common/LinkCard";

const settings = () => {
  return (
    <SettingsLayout
      icon='fas fa-user-cog'
      title='Paramètres du Compte'
      backLink='/dashboard'
    >
      <LinkCard
        icn='fas fa-user-edit'
        title="Modifier l'e-mail"
        link='/user-mail'
      />
      <LinkCard
        icn='fas fa-user-lock'
        title='Modifier le mot de passe'
        link='/user-password'
      />
    </SettingsLayout>
  );
};

export default PrivatePage(settings);
