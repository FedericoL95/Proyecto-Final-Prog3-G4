import { useEffect, useState } from "react";
import "../styles/perfil.css";
import Button from "../components/Button";
import Input from "../components/Input";
export default function Perfil() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [previewImg, setPreviewImg] = useState("-");
  const [stats, setStats] = useState({ leidos: "", leyendo: "", pendientes: "" });
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [libros, setLibros] = useState([]);



  // IMPORTANTE: Los métodos de perfil los puse como una idea para que no esté vacío, pero no se
  // si funcionarían porque necesitan guardar el perfil como JSON. No se si eso genera algún problema con el back o no



  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("perfilData") || "{}");
    if (saved) {
      setNombre(saved.nombre || "");
      setDescripcion(saved.descripcion || "");
      setPreviewImg(saved.previewImg || "-");
      setStats(saved.stats || { leidos: "", leyendo: "", pendientes: "" });
      setLibros(saved.libros || []);
    }
  }, []);

  const guardarPerfil = (e) => {
    e.preventDefault();
    localStorage.setItem("perfilData", JSON.stringify({
      nombre,
      descripcion,
      previewImg,
      stats,
      libros
    }));
  };

  const agregarLibro = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !autor.trim()) return;

    const nuevoLibro = {
      id: // no estoy seguro de como asegurar que tenga una id unica
      titulo: titulo.trim(),
      autor: autor.trim()
    };

    const nextLibros = [...libros, nuevoLibro];
    setLibros(nextLibros);
    setTitulo("");
    setAutor("");
  };

  return (
    <div className="page">
      <section className="perfil">
        <h2>Mi Perfil</h2>

        <form onSubmit={guardarPerfil}>
        <Input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre de usuario"
        />
          <Input
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
          <label htmlFor="imagen" className="btn-file">
            Elegir foto de perfil
          </label>
          <input type="file" id="imagen" accept="image/*" hidden onChange={handleImageChange} />
          <button type="submit">Guardar Perfil</button>
        </form>

      </section>

      <section className="estadisticas">
        <h2>Estadísticas</h2>
        <input
          type="number"
          placeholder="Libros leídos"
          value={stats.leidos}
          onChange={(e) => setStats({ ...stats, leidos: e.target.value })}
        />
        <input
          type="number"
          placeholder="En lectura"
          value={stats.leyendo}
          onChange={(e) => setStats({ ...stats, leyendo: e.target.value })}
        />
        <input
          type="number"
          placeholder="Pendientes"
          value={stats.pendientes}
          onChange={(e) => setStats({ ...stats, pendientes: e.target.value })}
        />
      </section>

      <section className="libros">
        <h2>📖 Agregar Libro</h2>

        <form onSubmit={agregarLibro}>
          <input
            type="text"
            placeholder="Título del libro"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
          <button type="submit">Agregar</button>
        </form>

        <div id="listaLibros">
          {libros.map((libro) => (
            <div className="libro" key={libro.id}>
              <strong>{libro.titulo}</strong>
              <p>{libro.autor}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}