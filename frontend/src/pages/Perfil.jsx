import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { obtenerLibros } from "../services/libroservice";
import "../styles/perfil.css";

export default function Perfil() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [stats, setStats] = useState({ leidos: 0, leyendo: 0, porLeer: 0, total: 0 });

  useEffect(() => {
    obtenerLibros()
      .then((res) => {
        const libros = res.data || [];
        setStats({
          leidos: libros.filter((l) => l.estado === "leído").length,
          leyendo: libros.filter((l) => l.estado === "leyendo").length,
          porLeer: libros.filter((l) => l.estado === "por leer").length,
          total: libros.length,
        });
      })
      .catch(() => {});
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("libros");
    localStorage.removeItem("perfilData");
    navigate("/biblioteca");
  };

  return (
    <div className="page">
      <div className="perfil-container">

        <section className="perfil-seccion perfil-info">
          <h2>Mi Cuenta</h2>
          <div className="perfil-campo">
            <span className="perfil-label">Nombre</span>
            <span className="perfil-valor">{user.nombre || "-"}</span>
          </div>
          <div className="perfil-campo">
            <span className="perfil-label">Email</span>
            <span className="perfil-valor">{user.email || "-"}</span>
          </div>
        </section>

        <section className="perfil-seccion perfil-stats">
          <h2>Estadisticas de Lectura</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-numero">{stats.total}</span>
              <span className="stat-label">Total</span>
            </div>
            <div className="stat-card stat-leidos">
              <span className="stat-numero">{stats.leidos}</span>
              <span className="stat-label">Leidos</span>
            </div>
            <div className="stat-card stat-leyendo">
              <span className="stat-numero">{stats.leyendo}</span>
              <span className="stat-label">Leyendo</span>
            </div>
            <div className="stat-card stat-porleer">
              <span className="stat-numero">{stats.porLeer}</span>
              <span className="stat-label">Por leer</span>
            </div>
          </div>
        </section>

        <button className="logout-btn" onClick={handleLogout}>
          Cerrar sesion
        </button>

      </div>
    </div>
  );
}
