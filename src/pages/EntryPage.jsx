import { useState } from "react";
import SecondaryCard from "./SecondaryCard";
import NavComponent from "../components/NavComponent";
import SectionsContainer from "../sections/SectionsContainer";

const EntryPage = () => {
  const token = localStorage.getItem("accessToken");

  const [isLogged, setIsLogged] = useState(!!token);
  const [step, setStep] = useState(token ? "user" : "welcome");
  const [showSecondary, setShowSecondary] = useState(false);
  const [bounce, setBounce] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleEntryClick = () => {
    setBounce(false);
    setTimeout(() => setBounce(true), 10);
    setTimeout(() => {
      setBounce(false);
      setShowSecondary((prev) => !prev);
    }, 700);
  };

  const handleLoginSuccess = () => {
    setIsLogged(true);
    setStep("user");
    setShowSecondary(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    setIsLogged(false);
    setStep("welcome");
    setActiveSection(null);
    setShowSecondary(false);
  };

  return (
    <div className="app-layout">
      <div
        className={`main-card ${bounce ? "bounce" : ""}`}
        onClick={handleEntryClick}
      />

      <div className={`secondary-wrapper ${showSecondary ? "visible" : ""}`}>
        {showSecondary && (
          <SecondaryCard
            step={step}
            setStep={setStep}
            onLoginSuccess={handleLoginSuccess}
            onLogout={handleLogout}
          />
        )}
      </div>

      {isLogged && showSecondary && (
        <>
          <NavComponent
            onSelectSection={(section) =>
              setActiveSection((prev) => (prev === section ? null : section))
            }
          />

          <div className="sections-wrapper">
            <div className={`section-animated ${activeSection ? "visible" : ""}`}>
              <SectionsContainer activeSection={activeSection} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EntryPage;
