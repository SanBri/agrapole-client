import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Card from "../common/Card";
import Spinner from "../common/Spinner";
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
    <Card title={title}>
      {loading || !data ? (
        <Spinner />
      ) : type === "PDF" ? (
        data.data.length > 0 ? (
          data.data.map((e) => <p key={e.title}>{e.title} </p>)
        ) : (
          <p>Il n'y a aucune carte PDF dans cette fenêtre</p>
        )
      ) : (
        ""
      )}
    </Card>
  );
};

export default DashboardLayout;
