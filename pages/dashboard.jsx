import Head from "next/head";

import PrivatePage from "../components/layout/PrivatePage";
import DashboardLayout from "../components/common/DashboardLayout";
import NavBar from "../components/layout/NavBar";

const dashboard = () => {
  return (
    <>
      <Head>
        <title>FRSEA AuRA | Administration</title>
        <script
          src='https://kit.fontawesome.com/556a7dddee.js'
          crossOrigin='anonymous'
        />
      </Head>
      <NavBar />
      <div className='administration'>
        <div className='administration__title'>
          <h1 className='info'>Tableau de bord</h1>
        </div>
        <div className='administration__content'>
          <DashboardLayout type='hero' title='Accueil' />
          <DashboardLayout type='PDF' title='Fenêtre PDF A' block='A' />
          <DashboardLayout type='partner' title='Partenaires' />
          <DashboardLayout type='PDF' title='Fenêtre PDF B' block='B' />
        </div>
      </div>
      <div className='smartphone-only'>
        <NavBar position='end' />
      </div>
    </>
  );
};

export default PrivatePage(dashboard);
