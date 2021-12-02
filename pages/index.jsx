import Head from "next/head";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import HalfBlocks from "../components/common/HalfBlocks";
import Grade from "../components/common/Grade";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import PDFCards from "../components/common/PDFCards";
import NavBar from "../components/layout/NavBar";

export default function Home() {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  const [smartPhone, setSmartPhone] = useState(false);
  useEffect(() => {
    screen.width < 900 ? setSmartPhone(true) : "";
  }, []);

  return (
    <>
      <Head>
        <title>FRSEA AuRA</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        {isAuthenticated && !smartPhone ? <NavBar position='right' /> : ""}
        <Hero></Hero>
        <About />
        <HalfBlocks id='halfBlockA'>
          <PDFCards block='A' />
          <div className='half-blocks__image img-right'>
            <img src='/right.jfif' width='100%' />
          </div>
        </HalfBlocks>
        <div className='grade-and-partners'>
          <Slider />
          <Grade />
        </div>
        <HalfBlocks id='halfBlockB'>
          <div className='half-blocks__image img-left'>
            <img src='/left.jpg' width='100%' />
          </div>
          <PDFCards block='B' />
        </HalfBlocks>
        <Contact />
        {smartPhone && isAuthenticated && (
          <div className='smartphone-only navIndex'>
            <NavBar position='end' />
          </div>
        )}
      </Layout>
    </>
  );
}
