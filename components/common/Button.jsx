const Button = ({ text, className, smartPhone, icn, onClick }) => {
  let classDefinition = `button`;

  className && (classDefinition += ` ${className}`);

  return (
    <div onClick={onClick} className={classDefinition}>
      {!smartPhone ? <p>{text}</p> : <i className={icn}></i>}
    </div>
  );
};

export default Button;
