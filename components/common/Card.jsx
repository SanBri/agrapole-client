const Card = ({ title, children }) => {
  return (
    <div className='card'>
      {title && (
        <div className='card__title'>
          <h2>{title}</h2>
        </div>
      )}
      <div className='card__content'>{children}</div>
    </div>
  );
};

export default Card;
