import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { getHero } from "../../actions/hero";
import { getPDFCards } from "../../actions/PDFCard";
import { getPartners, deletePartner } from "../../actions/partner";
import Card from "../common/Card";
import Spinner from "../common/Spinner";
import Alert from "../layout/Alert";
import Button from "./Button";
import Hero from "../Hero";
import HeroForm from "../HeroForm";
import PDFCard from "./PDFCard";
import PDFCardForm from "../PDFCardForm";
import PartnerForm from "../PartnerForm";
import PartnerLogo from "../common/PartnerLogo";

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

  const deletePartnerClick = (partnerID, partnerName) => {
    if (
      window.confirm(
        `Voulez-vous vraiment supprimer définitivement le partenaire "${partnerName}" ?`
      )
    ) {
      dispatch(deletePartner(partnerID, id));
    }
  };

  return (
    <>
      <Card title={title}>
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
              <p>Il n'y a aucun fichier PDF dans cette fenêtre</p>
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
                {data.map((partner) => (
                  <div key={partner._id} className='partner'>
                    <div className='partner__title'>
                      <p className='bold'>{partner.name}</p>
                    </div>

                    {partner.image && (
                      <div className='partner__logo'>
                        <PartnerLogo image={partner.image} size={100} />
                      </div>
                    )}
                    <div className='line'></div>
                    <div className='partner__button'>
                      <Button
                        className='delete'
                        text='Supprimer'
                        onClick={(e) =>
                          deletePartnerClick(partner._id, partner.name)
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ textAlign: "center" }}>Il n'y a aucun partenaire</p>
            )}
            <PartnerForm blockID={id} />
          </>
        ) : (
          ""
        )}
        <Alert blockID={id} />
      </Card>
    </>
  );
};

export default DashboardLayout;
