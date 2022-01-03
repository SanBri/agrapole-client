import Head from "next/head";

import PrivatePage from "../components/layout/PrivatePage";
import DashboardLayout from "../components/common/DashboardLayout";
import NavBar from "../components/layout/NavBar";

const dashboard = () => {
  return (
    <>
      <Head>
        <title>Administration | Cultive Ton Avenir - FRSEA AuRA </title>
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
          <DashboardLayout type='PDF' title='Formations (PDF)' block='A' />
          <DashboardLayout type='grade' title='Moyennes' />
          <DashboardLayout type='partner' title='Partenaires' />
          <DashboardLayout type='PDF' title="Plus d'infos (PDF)" block='B' />
          <DashboardLayout type='footer' title='Pied de Page' />
        </div>
      </div>
      <div className='mobile-only'>
        <NavBar position='end' />
      </div>
    </>
  );
};

export default PrivatePage(dashboard);
