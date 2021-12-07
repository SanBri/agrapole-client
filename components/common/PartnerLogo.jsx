import { Image, Transformation } from "cloudinary-react";

const PartnerLogo = ({ image, size }) => {
  let inline = {};
  size && ((inline.width = size), (inline.height = size));

  return (
    <>
      <Image cloudName='hcn0tdlxx' publicId={`frseaura/partners/${image}`}>
        <Transformation width='70' height='100' />
      </Image>
    </>
  );
};

export default PartnerLogo;
