import { useEffect, useState } from "react";

const UserCard = ({ onLogout }) => {
  const [user, setUser] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    secondName: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });

  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    if (!token) return;

    fetch("http://localhost:3000/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setFormData({
          name: data.name,
          secondName: data.secondName,
          email: data.email,
          phone: data.phone,
          password: "",
          repeatPassword: "",
        });
      });
  }, [token]);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSave = async () => {
    if (formData.password && formData.password !== formData.repeatPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    const res = await fetch("http://localhost:3000/me", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) return alert("Error al actualizar perfil");

    const updated = await res.json();
    setUser(updated);
    setEditing(false);
    setExpanded(false);
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm("¿Eliminar tu cuenta definitivamente?")) return;

    const res = await fetch(`http://localhost:3000/users/${user._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      alert("No se pudo eliminar la cuenta");
      return;
    }

    onLogout();
  };

  if (!user) return null;

  return (
    <div
      className={`user-card ${expanded ? "expanded" : ""}`}
      onClick={() => !editing && setExpanded((p) => !p)}
    >
      <p className="userLabel">
        {`Name: ${user.name} ${user.secondName}`}
      </p>

      {expanded && !editing && (
        <>
          <p className="userLabel">Email: {user.email}</p>
          <p className="userLabel">Teléfono: {user.phone}</p>
          <p className="userLabel">Role: {user.role}</p>

          <div className="btnD">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setEditing(true);
              }}
            >
              Editar
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteAccount();
              }}
            >
              Eliminar
            </button>
          </div>
        </>
      )}

      {editing && (
        <div
          className="edit-form"
          onClick={(e) => e.stopPropagation()}
        >
          <input name="name" value={formData.name} onChange={handleChange} />
          <input
            name="secondName"
            value={formData.secondName}
            onChange={handleChange}
          />
          <input name="email" value={formData.email} onChange={handleChange} />
          <input name="phone" value={formData.phone} onChange={handleChange} />

          <input
            name="password"
            type="password"
            placeholder="Nueva contraseña"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            name="repeatPassword"
            type="password"
            placeholder="Repetir contraseña"
            value={formData.repeatPassword}
            onChange={handleChange}
          />

          <div className="edit-actions">
            <button onClick={handleSave}>Guardar</button>
            <button
              onClick={() => {
                setEditing(false);
                setExpanded(false);
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {!editing && (
        <button
          className="logout-btn"
          onClick={(e) => {
            e.stopPropagation();
            onLogout();
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default UserCard;
