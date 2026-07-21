import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/authservice";
import "../styles/forms.css";
import "../styles/cards.css";

export default function Login() {
  const navigate = useNavigate();
  const [modo, setModo] = useState("login");
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setCargando(true);

    try {
      let res;
      if (modo === "login") {
        res = await login({ email: form.email, password: form.password });
      } else {
        res = await register({
          nombre: form.nombre,
          email: form.email,
          password: form.password,
        });
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/biblioteca");
    } catch (err) {
      const msg =
        err.response?.data?.error || "Error al conectar con el servidor";
      setError(msg);
    } finally {
      setCargando(false);
    }
  };

  const toggleModo = () => {
    setModo(modo === "login" ? "register" : "login");
    setForm({ nombre: "", email: "", password: "" });
    setError(null);
  };

  return (
    <div className="page">
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-titulo">
            {modo === "login" ? "Iniciar sesion" : "Crear cuenta"}
          </h2>

          {error && <div className="login-error">{error}</div>}

          <form className="form-libro" onSubmit={handleSubmit}>
            {modo === "register" && (
              <input
                type="text"
                name="nombre"
                placeholder="Nombre *"
                value={form.nombre}
                onChange={handleChange}
                required
              />
            )}
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña *"
              value={form.password}
              onChange={handleChange}
              required
              minLength="6"
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={cargando}
            >
              {cargando
                ? "Cargando..."
                : modo === "login"
                  ? "Iniciar sesion"
                  : "Registrarse"}
            </button>
          </form>

          <p className="login-toggle">
            {modo === "login" ? "No tenes cuenta?" : "Ya tenes cuenta?"}{" "}
            <button type="button" onClick={toggleModo}>
              {modo === "login" ? "Registrate" : "Inicia sesion"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
