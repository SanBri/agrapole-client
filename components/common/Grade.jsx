const Grade = ({ data, admin = false }) => {
  let classDefinition = {};

  let { title, average, scale } = data;

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
    <div className={classDefinition.global} id='grade'>
      {admin ? (
        <div className={classDefinition.content}>
          <h6>
            {title} : {average}/{scale}
          </h6>
        </div>
      ) : (
        <>
          <div className={classDefinition.icon}></div>
          <div className={classDefinition.title}>
            <h3>{title} :</h3>
          </div>
          <div className={classDefinition.content}>
            <h3>
              {average}/{scale}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Grade;
