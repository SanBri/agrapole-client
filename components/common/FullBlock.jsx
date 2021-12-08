const FullBlock = ({ id, children }) => {
  return (
    <div className='full-block' id={id}>
      {children}
    </div>
  );
};

export default FullBlock;
