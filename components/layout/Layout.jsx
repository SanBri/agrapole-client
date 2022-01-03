import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFooter } from "../../actions/footer";

import Header from "./Header";
import Footer from "./Footer";
const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFooter());
  }, [dispatch]);

  const footer = useSelector((state) => state.footerReducer.footer);

  return (
    <div className='container'>
      <Header />
      {children}
      <Footer data={footer} />
    </div>
  );
};

export default Layout;
