const Button = ({ text, className, onClick }) => {
  let classDefinition = `button`;

  className && (classDefinition += ` ${className}`);

  return (
    <div onClick={onClick} className={classDefinition}>
      <p>{text}</p>
    </div>
  );
};

export default Button;
