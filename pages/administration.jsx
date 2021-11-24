import PrivatePage from "../components/layout/PrivatePage";
import SettingsLayout from "../components/common/SettingsLayout";
import LinkCard from "../components/common/LinkCard";

const administration = () => {
  return (
    <SettingsLayout icon='fas fa-home' title='Administration' backLink='/'>
      <LinkCard icn='fas fa-edit' title='Tableau de Bord' link='/dashboard' />
      <LinkCard
        icn='fas fa-user-cog'
        title='Paramètres du Compte'
        link='/settings'
      />
    </SettingsLayout>
  );
};

export default PrivatePage(administration);
