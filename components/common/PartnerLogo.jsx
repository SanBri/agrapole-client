const PartnerLogo = ({ image, size }) => {
  let url = `http://localhost:5000/api/partners/logoFile/${image}`;

  let inline = {};
  size && ((inline.width = size), (inline.height = size));

  return <>{<img src={url} style={inline} />}</>;
};

export default PartnerLogo;
