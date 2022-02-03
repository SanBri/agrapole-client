const PDFViewer = ({ file }) => {
  if (typeof window !== "undefined") {
    document.body.style.overflow = "hidden";
  }
  return (
    <>
      <object
        data={`https://res.cloudinary.com/hcn0tdlxx/image/upload/v1638448380/frseaura/PDF/${file}`}
        type='application/pdf'
        width='100%'
        height='1000'
      ></object>
    </>
  );
};

export default PDFViewer;
