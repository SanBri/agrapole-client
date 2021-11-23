import Head from "next/head";
import { Provider } from "react-redux";
import { useEffect } from "react";

import { loadUser } from "../actions/auth";
import setAuthToken from "../utils/setAuthToken";
import store from "../store";
import "../styles.scss";

function MyApp({ Component, pageProps }) {
  if (typeof window !== "undefined") {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <script
          src='https://kit.fontawesome.com/556a7dddee.js'
          crossOrigin='anonymous'
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
