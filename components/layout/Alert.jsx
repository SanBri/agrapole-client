import { useSelector } from "react-redux";

const Alert = ({ blockID }) => {
  const alerts = useSelector((state) => state.alertReducer);
  return (
    <>
      {alerts &&
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) =>
          alert.blockID === blockID ? (
            <div key={alert.id} className={`alert alert__${alert.alertType}`}>
              <p>{alert.msg}</p>
            </div>
          ) : (
            ""
          )
        )}
    </>
  );
};

export default Alert;
