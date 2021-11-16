const PDFViewer = ({ url }) => {
  return (
    <>
      <object
        data={url}
        type='application/pdf'
        width='100%'
        height='1000'
      ></object>
    </>
  );
};

export default PDFViewer;
