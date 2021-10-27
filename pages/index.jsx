import Head from "next/head";
import Script from "next/script";

import Layout from "../components/layout/Layout";
import Hero from "../components/Hero";
import PDFCard from "../components/common/PDFCard";
import HalfBlocks from "../components/common/HalfBlocks";
import Slider from "../components/Slider";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title></title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout />
      <Hero></Hero>
      <HalfBlocks>
        <div className='half-blocks__cards'>
          <PDFCard />
          <PDFCard />
        </div>
        <div className='half-blocks__image img-right'>
          <img src='https://picsum.photos/200' width='100%' />
        </div>
      </HalfBlocks>
      <Slider />
      <HalfBlocks>
        <div className='half-blocks__image img-left'>
          <img src='https://picsum.photos/250' width='100%' />
        </div>
        <div className='half-blocks__cards'>
          <PDFCard />
          <PDFCard />
        </div>
      </HalfBlocks>
      <Contact />
    </>
  );
}
