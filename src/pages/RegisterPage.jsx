import { useState } from "react";

const RegisterPage = ({ onShowLogin }) => {
  const [formData, setFormData] = useState({
    name: "",
    secondName: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error en el registro");
      }

      
      onShowLogin();

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card register-card">
      <h2>Registro</h2>

      <form className="form_grid" onSubmit={handleSubmit}>
        <input
        className="form_Input"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
        />

        <input
        className="form_Input"
          name="secondName"
          placeholder="Apellido"
          value={formData.secondName}
          onChange={handleChange}
        />

        <input
        className="form_Input"
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
        className="form_Input"
          name="phone"
          type="number"
          placeholder="Teléfono"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
        className="form_Input"
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
        className="form_Input"
          name="repeatPassword"
          type="password"
          placeholder="Repetir password"
          value={formData.repeatPassword}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Registrando..." : "Crear cuenta"}
        </button>
      </form>
      <button type="button" onClick={onShowLogin}>
  Ya tengo cuenta
</button>

      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterPage;
