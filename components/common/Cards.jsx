import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getPDFCards } from "../../actions/PDFCard";
import { getGrades } from "../../actions/grade";
import Grade from "./Grade";

import PDFCard from "./PDFCard";

const Cards = ({ type, title, block, id }) => {
  const dispatch = useDispatch();
  const [randomID] = useState(uuidv4());
  let data = null;
  let action;

  type === "PDF"
    ? (action = getPDFCards(block, randomID))
    : type == "grades"
    ? (action = getGrades())
    : "";

  useEffect(() => {
    dispatch(action);
  }, [dispatch]);

  type === "PDF"
    ? (data = useSelector((state) =>
        state.PDFCardReducer.PDFCards.find((e) => e.id === randomID)
      ))
    : type === "grades"
    ? (data = useSelector((state) => state.gradeReducer.grades))
    : "";

  return (
    <div className='half-blocks__cards' id={id}>
      <div className='half-blocks__cards-title'>
        <h3>{title}</h3>
      </div>
      <div className='half-blocks__cards-content'>
        {type === "PDF" ? (
          data && data.data.length > 0 ? (
            data.data.map((pdfCard) => (
              <PDFCard
                key={pdfCard._id}
                block={block}
                id={pdfCard._id}
                title={pdfCard.title}
                link={`/${pdfCard._id}`}
              />
            ))
          ) : (
            <img src='./logo.png' width='50%' height='100%' />
          )
        ) : type === "grades" ? (
          data && data.length > 0 ? (
            data.map((grade) => <Grade key={grade._id} data={grade} />)
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cards;
