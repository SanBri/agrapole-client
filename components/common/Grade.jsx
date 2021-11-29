import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGrade } from "../../actions/grade";

const Grade = ({ admin = false }) => {
  const dispatch = useDispatch();
  let classDefinition = {};

  const grade = useSelector((state) => state.gradeReducer.grade);

  useEffect(() => {
    dispatch(getGrade());
  }, [dispatch]);

  let { title, average, scale } = grade;

  !admin
    ? (classDefinition = {
        global: "grade",
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
