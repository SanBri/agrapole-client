import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PrivatePage = (Private) => () => {
  const router = useRouter();

  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const loading = useSelector((state) => state.authReducer.loading);

  let authorized = false;

  if (!isAuthenticated && !loading) {
    router.push("/login");
  } else {
    authorized = true;
  }

  return !loading && authorized ? <Private /> : " ";
};

export default PrivatePage;
