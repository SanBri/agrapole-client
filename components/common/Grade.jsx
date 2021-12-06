const Grade = ({ data, admin = false }) => {
  let classDefinition = {};

  let { _id, name, title, average, scale } = data;

  !admin
    ? (classDefinition = {
        global: "grade",
        icon: "grade__icon",
        title: "grade__title",
        content: "grade__content",
      })
    : (classDefinition = {
        global: "grade-admin",
        content: "grade-admin__content",
      });

  return (
    <div className={classDefinition.global} id={_id}>
      {admin ? (
        <div className={classDefinition.content}>
          <h6>{title} :</h6>
          <h6>
            {average}/{scale}
          </h6>
        </div>
      ) : (
        <>
          <div className={classDefinition.icon}>
            <img src={`./icons/grades/${name}.png`} width='50' height='50' />
          </div>
          <div className={classDefinition.title}>
            <p>{title} :</p>
          </div>
          <div className={classDefinition.content}>
            <p className='bold'>
              {average}/{scale}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Grade;
