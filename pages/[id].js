import PDFViewer from "../components/PDFViewer";
import Spinner from "../components/common/Spinner";

const PDFPage = ({ pdfCard }) => {
  return <> {pdfCard.PDF ? <PDFViewer file={pdfCard.PDF} /> : <Spinner />}</>;
};

export const getStaticPaths = async () => {
  let paths = [];
  try {
    const uri = `${process.env.URL}/pdfCards/`;
    const res = await fetch(uri);
    const pdfCards = await res.json();
    paths = pdfCards.map((pdfCard) => ({
      params: { id: pdfCard.id.toString() },
    }));
  } catch (err) {
    console.log("message d'erreur", err);
  }
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params }) => {
  const uri = `${process.env.URL}/pdfCards/pdfCard/${params.id}`;
  const res = await fetch(`${uri}`);
  const data = await res.json();
  return { props: { pdfCard: data } };
};

export default PDFPage;
