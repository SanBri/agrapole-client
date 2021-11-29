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
    <section>
      <div className={classDefinition.global} id='grade'>
        <div className={classDefinition.content}>
          <h6>
            {title} : {average}/{scale}
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Grade;
