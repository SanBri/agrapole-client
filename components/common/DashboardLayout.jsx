import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Card from "../common/Card";
import Spinner from "../common/Spinner";
import PDFCard from "./PDFCard";
import PDFCardForm from "../PDFCardForm";
import Alert from "../layout/Alert";
import { getPDFCards } from "../../actions/PDFCard";

const DashboardLayout = ({ type, title, block }) => {
  const dispatch = useDispatch();
  const [id] = useState(uuidv4());

  let action;
  let loading;
  let data = null;
  type === "PDF" ? (action = getPDFCards(block, id)) : "";

  useEffect(() => {
    dispatch(action);
  }, [dispatch]);

  type === "PDF"
    ? ((data = useSelector((state) =>
        state.PDFCardReducer.PDFCards.find((e) => e.id === id)
      )),
      (loading = useSelector((state) => state.PDFCardReducer.loading)))
    : "";

  return (
    <>
      <Card title={title}>
        <Alert />

        {loading || !data ? (
          <Spinner />
        ) : type === "PDF" ? (
          data.data.length > 0 ? (
            <div className='dashboard-layout__pdfCards'>
              {data.data.map((e) => (
                <PDFCard
                  key={e._id}
                  block={block}
                  id={e._id}
                  title={e.title}
                  admin={true}
                />
              ))}
            </div>
          ) : (
            <p>Il n'y a aucune carte PDF dans cette fenêtre</p>
          )
        ) : (
          ""
        )}
        <PDFCardForm whichBlock={block} />
      </Card>
    </>
  );
};

export default DashboardLayout;
