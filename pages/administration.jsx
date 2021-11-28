import Head from "next/head";
import { useSelector } from "react-redux";

import PrivatePage from "../components/layout/PrivatePage";
import SettingsLayout from "../components/common/SettingsLayout";
import LinkCard from "../components/common/LinkCard";
import NavBar from "../components/layout/NavBar";

const administration = () => {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  return (
    <>
      <Head>
        <script
          src='https://kit.fontawesome.com/556a7dddee.js'
          crossOrigin='anonymous'
        />
      </Head>

      {isAuthenticated && <NavBar position='right' />}
      <SettingsLayout icon='fas fa-home' title='Administration' backLink='/'>
        <LinkCard icn='fas fa-edit' title='Tableau de Bord' link='/dashboard' />
        <LinkCard
          icn='fas fa-user-cog'
          title='Paramètres du Compte'
          link='/settings'
        />
      </SettingsLayout>
    </>
  );
};

export default PrivatePage(administration);
