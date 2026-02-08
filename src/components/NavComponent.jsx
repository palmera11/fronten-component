const NavComponent = ({ onSelectSection }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className="NavBar visible">
      <button onClick={() => onSelectSection("skills")}>
        Tecnologías
      </button>

      <button onClick={() => onSelectSection("projects")}>
        Trabajos
      </button>

      <button onClick={() => onSelectSection("contact")}>
        Contacto
      </button>

      {user?.role === "admin" && (
        <button onClick={() => onSelectSection("admin")}>
          Users List
        </button>
      )}
    </nav>
  );
};

export default NavComponent;
