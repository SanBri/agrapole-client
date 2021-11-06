const Card = ({ title, children }) => {
  return (
    <div className='card'>
      {title && (
        <div className='card__title'>
          <h1>{title}</h1>
        </div>
      )}
      <div className='card__content'>{children}</div>
    </div>
  );
};

export default Card;
