import { useSelector } from "react-redux";

const Alert = () => {
  const alerts = useSelector((state) => state.alertReducer);
  return (
    <>
      {alerts &&
        alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <div key={alert.id} className={`alert alert__${alert.alertType}`}>
            <p>{alert.msg}</p>
          </div>
        ))}
    </>
  );
};

export default Alert;
