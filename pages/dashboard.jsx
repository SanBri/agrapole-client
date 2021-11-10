import Head from "next/head";

import PrivatePage from "../components/layout/PrivatePage";
import DashboardLayout from "../components/common/DashboardLayout";

const dashboard = () => {
  return (
    <>
      <Head>
        <title>FRSEA AuRA | Administration</title>
      </Head>
      <div className='administration'>
        <h1>Tableau de bord</h1>
        <DashboardLayout
          type='PDF'
          title='Fenêtre PDF A'
          block='A'
          reducer='PDFCardReducer'
        />
        <DashboardLayout
          type='PDF'
          title='Fenêtre PDF B'
          block='B'
          reducer='PDFCardReducer'
        />
      </div>
    </>
  );
};

export default PrivatePage(dashboard);