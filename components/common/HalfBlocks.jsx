const HalfBlocks = ({ children, id }) => {
  return (
    <section>
      <div id={id} className='half-blocks'>
        {children}
      </div>
    </section>
  );
};

export default HalfBlocks;
