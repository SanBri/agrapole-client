import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getHero } from "../actions/hero";
import PDFViewer from "../components/PDFViewer";
import Spinner from "../components/common/Spinner";

const formations = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHero());
  }, [dispatch]);
  const hero = useSelector((state) => state.heroReducer.hero);

  return <> {hero.PDF ? <PDFViewer file={hero.PDF} /> : <Spinner />}</>;
};

export default formations;
