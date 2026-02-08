## 🎨 README.md — Frontend (MIAO Portfolio)

```md
# MIAO Portfolio – Frontend

Frontend del proyecto **MIAO Portfolio**, desarrollado con React.
Incluye autenticación, animaciones suaves, glassmorphism, diseño responsive y panel de administración.

---

## 🚀 Tecnologías

- React
- Vite
- JavaScript (ES6+)
- SCSS (Sass)
- Fetch API
- JWT Auth

---

## 📂 Estructura principal

src/
├─ components/
│ ├─ NavComponent.jsx
│ ├─ UserCard.jsx
├─ pages/
│ ├─ EntryPage.jsx
│ ├─ SecondaryCard.jsx
│ ├─ WelcomePage.jsx
│ ├─ RegisterPage.jsx
│ ├─ LoginPage.jsx
├─ sections/
│ ├─ SectionsContainer.jsx
│ ├─ SkillsSection.jsx
│ ├─ Projects/
│ │ ├─ ProjectsSection.jsx
│ │ ├─ ProjectCard.jsx
│ │ └─ projects.data.js
│ ├─ Contact/
│ │ ├─ ContactSection.jsx
│ │ └─ ContactCard.jsx
│ └─ AdminSection.jsx
├─ styles/
│ ├─ variable.scss
│ └─ img/
├─ App.jsx
├─ App.scss
├─ main.jsx
└─ index.css

markdown
Copiar código

---

## ✨ Funcionalidades

### Acceso
- Welcome → Registro → Login
- Animaciones suaves entre estados
- Persistencia de sesión con JWT

### Usuario
- Card de usuario expandible
- Edición de datos personales
- Cambio de contraseña
- Logout

### Navegación
- Navbar animado
- Secciones:
  - Tecnologías
  - Proyectos
  - Contacto
- Toggle de secciones (mostrar / ocultar)

### Admin
- Botón visible solo si `role === admin`
- Panel de administración:
  - Listar usuarios
  - Editar usuarios
  - Cambiar roles
  - Eliminar usuarios

### Diseño
- Glassmorphism
- Animaciones CSS
- UX Mobile First real
- Responsive completo (mobile, tablet, desktop)

---

## ⚙️ Configuración

El frontend espera el backend en:

http://localhost:3000

yaml
Copiar código

Tokens almacenados en:
localStorage

accessToken

refreshToken

user

yaml
Copiar código

---

## 📦 Instalación

```bash
npm install
▶️ Ejecutar frontend
bash
Copiar código
npm run dev
Disponible en:

arduino
Copiar código
http://localhost:5173


######## deme credenciales

admin: 123@test.com    
passsword: 12345678