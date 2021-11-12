import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getPDFCards } from "../../actions/PDFCard";

import PDFCard from "./PDFCard";

const PDFCards = ({ block }) => {
  const dispatch = useDispatch();
  const [id] = useState(uuidv4());

  useEffect(() => {
    dispatch(getPDFCards(block, id));
  }, [dispatch]);

  const pdfCards = useSelector((state) =>
    state.PDFCardReducer.PDFCards.find((e) => e.id === id)
  );

  return (
    <div className='half-blocks__cards'>
      {pdfCards && pdfCards.data.length > 0 ? (
        pdfCards.data.map((pdfCard) => (
          <PDFCard
            key={pdfCard._id}
            block={block}
            id={pdfCard._id}
            title={pdfCard.title}
          />
        ))
      ) : (
        <img src='./logo.png' width='50%' height='100%' />
      )}
    </div>
  );
};

export default PDFCards;
