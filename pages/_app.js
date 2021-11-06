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
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
