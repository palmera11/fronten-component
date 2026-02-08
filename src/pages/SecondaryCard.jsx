import WelcomePage from "./WelcomePage";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import UserCard from "../components/UserCard";

const SecondaryCard = ({ step, setStep, onLoginSuccess, onLogout }) => {
  return (
    <div className="section-animated visible">
      {step === "welcome" && (
        <WelcomePage onShowRegister={() => setStep("register")} />
      )}

      {step === "register" && (
        <RegisterPage onShowLogin={() => setStep("login")} />
      )}

      {step === "login" && (
        <LoginPage
          onSuccess={() => {
            onLoginSuccess();
            setStep("user");
          }}
        />
      )}

      {step === "user" && <UserCard onLogout={onLogout} />}
    </div>
  );
};

export default SecondaryCard;
