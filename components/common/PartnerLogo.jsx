import axios from "axios";

const PartnerLogo = ({ image, size }) => {
  let url = `http://localhost:5000/api/partners/logoFile/${image}`;

  return <>{<img src={url} width={size} height={size} />}</>;
};

export default PartnerLogo;
