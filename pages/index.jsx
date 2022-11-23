import Head from "next/head";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import CoursesBlock from "../components/CoursesBlock";
import HalfBlocks from "../components/common/HalfBlocks";
import Slider from "../components/Slider";
import Contact from "../components/Contact";
import Cards from "../components/common/Cards";
import NavBar from "../components/layout/NavBar";
import FullBlock from "../components/common/FullBlock";

export default function Home() {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    screen.width < 900 ? setMobile(true) : "";
  }, []);

  return (
    <>
      <Head>
        <title>Cultive Ton Avenir | FRSEA AuRA</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        {setTimeout(
          // Pour charger avant l'affichage
          () => (
            <>
              {isAuthenticated && !mobile ? <NavBar position='right' /> : ""}
              <Hero></Hero>
              <About />
              <FullBlock id='courses'>
                <CoursesBlock />
              </FullBlock>
              <HalfBlocks id='partnersAndGrades'>
                <Slider />
                <Cards type='grades' title='EN QUELQUES CHIFFRES' id='grades' />
              </HalfBlocks>
              <FullBlock id='information'>
                <Cards title="PLUS D'INFORMATIONS" type='PDF' block='B' />
              </FullBlock>
              <Contact />
              {mobile && isAuthenticated && (
                <div className='mobile-only navIndex'>
                  <NavBar position='end' />
                </div>
              )}
            </>
          ),
          3000
        )}
      </Layout>
    </>
  );
}
