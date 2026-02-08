const WelcomePage = ({ onShowRegister }) => {
  return (
    <div className="glass-card welcome-card">
      <h1>- Bienvenido a © MIAO - </h1>
      <h3>Por favor para Acceder a mi PortFolio personal <br /> - registrese en la web -</h3>
      <p>
        
        Portfolio personal como desarrollador web full stack junior
        
      </p>

      <button onClick={onShowRegister}>
        Acceder
      </button>
    </div>
  );
};

export default WelcomePage;
