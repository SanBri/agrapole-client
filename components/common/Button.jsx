const Button = ({ text, className, mobile, icn, onClick }) => {
  let classDefinition = `button`;

  className && (classDefinition += ` ${className}`);

  return (
    <div onClick={onClick} className={classDefinition}>
      {!mobile ? <p>{text}</p> : <i className={icn}></i>}
    </div>
  );
};

export default Button;
