import Alert from "../components/layout/Alert";
import Card from "../components/common/Card";
import LoginForm from "../components/LoginForm";

const login = () => {
  return (
    <div className='login'>
      <Card title='Connexion'>
        <Alert />
        <LoginForm />
      </Card>
    </div>
  );
};

export default login;
