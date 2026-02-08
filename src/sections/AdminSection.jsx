import { useEffect, useState } from "react";

const AdminSection = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editData, setEditData] = useState({});

  const token = localStorage.getItem("accessToken");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.role !== "admin") {
    return <p>Acceso no autorizado</p>;
  }

  const getAllUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUsers(data);
    } catch {
      alert("Error cargando usuarios");
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("¿Eliminar usuario?")) return;

    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    setUsers(users.filter((u) => u._id !== id));
  };

  const startEdit = (u) => {
    setEditingUserId(u._id);
    setEditData({
      name: u.name,
      secondName: u.secondName,
      email: u.email,
      phone: u.phone,
      role: u.role,
      password: "",
    });
  };

  const updateUser = async (id) => {
    const payload = { ...editData };
    if (!payload.password) delete payload.password;

    const res = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.message);

    setUsers(users.map((u) => (u._id === id ? data : u)));
    setEditingUserId(null);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <section className="admin-section">
      <h2>Admin Panel</h2>

      {users.map((u) => (
        <div key={u._id} className="cardUser">
          <details>
            <summary>
              <strong>{u.name} {u.secondName}</strong> — {u.phone}
            </summary>

            {editingUserId === u._id ? (
              <>
                <input value={editData.name}
                  onChange={(e) => setEditData({ ...editData, name: e.target.value })} />
                <input value={editData.secondName}
                  onChange={(e) => setEditData({ ...editData, secondName: e.target.value })} />
                <input value={editData.email}
                  onChange={(e) => setEditData({ ...editData, email: e.target.value })} />
                <input value={editData.phone}
                  onChange={(e) => setEditData({ ...editData, phone: e.target.value })} />

                <select
                  value={editData.role}
                  onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                >
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>

                <input
                  type="password"
                  placeholder="Nueva contraseña (opcional)"
                  onChange={(e) =>
                    setEditData({ ...editData, password: e.target.value })
                  }
                />

                <button onClick={() => updateUser(u._id)}>Guardar</button>
                <button onClick={() => setEditingUserId(null)}>Cancelar</button>
              </>
            ) : (
              <>
                <p>Email: {u.email}</p>
                <p>Rol: {u.role}</p>
                <button onClick={() => startEdit(u)}>Editar</button>
                <button onClick={() => deleteUser(u._id)}>Eliminar</button>
              </>
            )}
          </details>
        </div>
      ))}
    </section>
  );
};

export default AdminSection;
