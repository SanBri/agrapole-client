import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { getHero } from "../../actions/hero";
import { getPDFCards } from "../../actions/PDFCard";
import { getPartners } from "../../actions/partner";
import Card from "../common/Card";
import Spinner from "../common/Spinner";
import Alert from "../layout/Alert";
import Button from "./Button";
import Hero from "../Hero";
import HeroForm from "../HeroForm";
import PDFCard from "./PDFCard";
import PDFCardForm from "../PDFCardForm";
import PartnerForm from "../PartnerForm";

const DashboardLayout = ({ type, title, block }) => {
  const dispatch = useDispatch();
  const [id] = useState(uuidv4());

  let action;
  let loading;
  let data = null;
  let maximumPDFCards = false;
  type === "PDF"
    ? (action = getPDFCards(block, id))
    : type === "hero"
    ? (action = getHero())
    : type == "partner"
    ? (action = getPartners())
    : "";

  useEffect(() => {
    dispatch(action);
  }, [dispatch]);

  type === "PDF"
    ? ((data = useSelector((state) =>
        state.PDFCardReducer.PDFCards.find((e) => e.id === id)
      )),
      data && (data.data.length > 2 ? (maximumPDFCards = true) : ""),
      (loading = useSelector((state) => state.PDFCardReducer.loading)))
    : type === "hero"
    ? ((data = useSelector((state) => state.heroReducer.hero)),
      (loading = useSelector((state) => state.heroReducer.loading)))
    : type === "partner"
    ? ((data = useSelector((state) => state.partnerReducer.partners)),
      (loading = useSelector((state) => state.partnerReducer.loading)))
    : "";

  return (
    <>
      <Card title={title}>
        <Alert blockID={id} />
        {loading || !data ? (
          <Spinner />
        ) : type === "PDF" ? (
          <>
            {data.data.length > 0 ? (
              <div className='dashboard-layout__pdfCards'>
                {data.data.map((e) => (
                  <PDFCard
                    key={e._id}
                    block={block}
                    id={e._id}
                    link={`/${e._id}`}
                    title={e.title}
                    blockID={id}
                    admin={true}
                  />
                ))}
              </div>
            ) : (
              <p>Il n'y a aucune carte PDF dans cette fenêtre</p>
            )}
            <PDFCardForm
              maximumPDFCards={maximumPDFCards}
              whichBlock={block}
              blockID={id}
            />
          </>
        ) : type === "hero" ? (
          <>
            <Hero admin />
            <HeroForm blockID={id} />
          </>
        ) : type === "partner" ? (
          <>
            {data.length > 0 ? (
              <div className='dashboard-layout__partners'>
                {data.map((e) => (
                  <div key={e._id} className='partner'>
                    <h6>{e.name}</h6>
                    <Button
                      className='delete'
                      text='Supprimer'
                      // onClick={(e) => deletePDFCardClick()}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p>Il n'y a aucun partenaire</p>
            )}
            <PartnerForm blockID={id} />
          </>
        ) : (
          ""
        )}
      </Card>
    </>
  );
};

export default DashboardLayout;
