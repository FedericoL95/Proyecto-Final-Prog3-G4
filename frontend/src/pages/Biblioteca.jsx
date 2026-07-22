import { useState, useEffect } from "react";
import { OrdenarLibros } from "../utils/OrdenarLibros";
import { getFromStorage, saveToStorage } from "../utils/StorageUtils";
import { obtenerGeneros, crearGenero } from "../services/generoservice";
import { obtenerLibros, crearLibro, editarLibro, eliminarLibro } from "../services/libroservice";
import Modal from "../components/common/Modal";
import "../styles/cards.css";

const STORAGE_KEY = "libros";
const GENEROS_KEY = "generos";

const isLogueado = () => !!localStorage.getItem("token");

const libroAFrontend = (libro) => ({
  ...libro,
  idGeneros: libro.idGenero ? [libro.idGenero] : [],
});

const libroABackend = (datos) => ({
  titulo: datos.titulo,
  autor: datos.autor,
  estado: datos.estado,
  puntuacion: datos.puntuacion || null,
  reseña: datos["reseña"] || null,
  idGenero: (datos.idGeneros && datos.idGeneros.length > 0) ? datos.idGeneros[0] : null,
});

const estadoOpciones = ["por leer", "leyendo", "leído"];

const estadoClase = {
  "por leer": "por-leer",
  leyendo: "leyendo",
  "leído": "leido",
};

const libroInicial = {
  titulo: "",
  autor: "",
  estado: "por leer",
  puntuacion: "",
  reseña: "",
  idGeneros: [],
};

export default function Biblioteca() {
  const [libros, setLibros] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [libroExpandido, setLibroExpandido] = useState(null);
  const [modalLibro, setModalLibro] = useState(false);
  const [modalGenero, setModalGenero] = useState(false);
  const [libroEditando, setLibroEditando] = useState(null);
  const [form, setForm] = useState(libroInicial);
  const [nuevoGenero, setNuevoGenero] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [filtroGenero, setFiltroGenero] = useState(null);
  const [guardando, setGuardando] = useState(false);
  const [errorForm, setErrorForm] = useState("");

  useEffect(() => {
    if (isLogueado()) {
      obtenerLibros()
        .then((res) => {
          const librosBackend = (res.data || []).map(libroAFrontend);
          setLibros(librosBackend);
          saveToStorage(STORAGE_KEY, librosBackend);
        })
        .catch(() => {
          const guardados = getFromStorage(STORAGE_KEY);
          if (guardados) setLibros(guardados);
        });
    } else {
      const guardados = getFromStorage(STORAGE_KEY);
      if (guardados) setLibros(guardados);
    }

    obtenerGeneros()
      .then((res) => {
        setGeneros(res.data);
        saveToStorage(GENEROS_KEY, res.data);
      })
      .catch(() => {
        const guardados = getFromStorage(GENEROS_KEY);
        if (guardados) setGeneros(guardados);
      });
  }, []);

  const guardarGeneros = (nuevos) => {
    setGeneros(nuevos);
    saveToStorage(GENEROS_KEY, nuevos);
  };

  const guardarLibros = (nuevos) => {
    setLibros(nuevos);
    saveToStorage(STORAGE_KEY, nuevos);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrorForm("");
  };

  const toggleGeneroForm = (idGenero) => {
    setErrorForm("");
    setForm((prev) => {
      const actual = prev.idGeneros || [];
      const existe = actual.includes(idGenero);
      return {
        ...prev,
        idGeneros: existe
          ? actual.filter((id) => id !== idGenero)
          : [...actual, idGenero],
      };
    });
  };

  const handleSubmitLibro = async (e) => {
    e.preventDefault();
    if (guardando) return;

    if (!form.titulo.trim() || !form.autor.trim()) {
      setErrorForm("Completa titulo y autor.");
      return;
    }

    if (!form.idGeneros || form.idGeneros.length === 0) {
      setErrorForm("Selecciona al menos un genero.");
      return;
    }

    setErrorForm("");
    setGuardando(true);
    const datosLibro = {
      ...form,
      puntuacion: form.puntuacion ? Number(form.puntuacion) : null,
    };

    if (isLogueado()) {
      try {
        if (libroEditando) {
          await editarLibro(libroEditando.idLibro, libroABackend(datosLibro));
        } else {
          await crearLibro(libroABackend(datosLibro));
        }
        const res = await obtenerLibros();
        const librosBackend = (res.data || []).map(libroAFrontend);
        setLibros(librosBackend);
        saveToStorage(STORAGE_KEY, librosBackend);
      } catch (err) {
        console.error("Error al guardar libro en la API:", err);
      }
    } else {
      if (libroEditando) {
        guardarLibros(
          OrdenarLibros(
            libros.map((l) =>
              l.idLibro === libroEditando.idLibro ? { ...l, ...datosLibro } : l
            )
          )
        );
      } else {
        guardarLibros(
          OrdenarLibros([...libros, { ...datosLibro, idLibro: Date.now() }])
        );
      }
    }

    setForm(libroInicial);
    setLibroEditando(null);
    setModalLibro(false);
    setGuardando(false);
  };

  const handleSubmitGenero = async (e) => {
    e.preventDefault();
    if (!nuevoGenero.trim()) return;

    const duplicado = generos.some(
      (g) => g.nombre.toLowerCase() === nuevoGenero.trim().toLowerCase()
    );
    if (duplicado) return;

    try {
      const res = await crearGenero({ nombre: nuevoGenero.trim() });
      const nuevo = res.data.genero || res.data;
      guardarGeneros([...generos, nuevo]);
    } catch {
      const generoLocal = { idGenero: Date.now(), nombre: nuevoGenero.trim() };
      guardarGeneros([...generos, generoLocal]);
    }

    setNuevoGenero("");
    setModalGenero(false);
  };

  const handleEliminarGenero = (idGenero) => {
    guardarGeneros(generos.filter((g) => g.idGenero !== idGenero));
  };

  const handleEliminar = async (id, e) => {
    e.stopPropagation();

    if (isLogueado()) {
      try {
        await eliminarLibro(id);
        const res = await obtenerLibros();
        const librosBackend = (res.data || []).map(libroAFrontend);
        setLibros(librosBackend);
        saveToStorage(STORAGE_KEY, librosBackend);
      } catch (err) {
        console.error("Error al eliminar libro:", err);
      }
    } else {
      guardarLibros(libros.filter((l) => l.idLibro !== id));
    }
  };

  const handleEditar = (libro, e) => {
    e.stopPropagation();
    setLibroEditando(libro);
    setForm({
      titulo: libro.titulo,
      autor: libro.autor,
      estado: libro.estado,
      puntuacion: libro.puntuacion || "",
      reseña: libro["reseña"] || "",
      idGeneros: libro.idGeneros || (libro.idGenero ? [libro.idGenero] : []),
    });
    setModalLibro(true);
  };

  const abrirModalNuevo = () => {
    setLibroEditando(null);
    setForm(libroInicial);
    setErrorForm("");
    setModalLibro(true);
  };

  const cerrarModalLibro = () => {
    setLibroEditando(null);
    setForm(libroInicial);
    setErrorForm("");
    setModalLibro(false);
  };

  const toggleExpand = (id) => {
    setLibroExpandido(libroExpandido === id ? null : id);
  };

  const nombresGeneros = (ids) => {
    if (!ids || ids.length === 0) return [];
    return ids
      .map((id) => {
        const g = generos.find((g) => g.idGenero === id);
        return g ? g.nombre : null;
      })
      .filter(Boolean);
  };

  const renderEstrellas = (puntuacion) => {
    if (!puntuacion) return null;
    return (
      <span className="libro-card__estrellas">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={i <= puntuacion ? "estrella--llena" : "estrella--vacia"}>
            &#9733;
          </span>
        ))}
      </span>
    );
  };

  const librosFiltrados = libros.filter((libro) => {
    const texto = busqueda.toLowerCase();
    const matchTexto =
      !texto ||
      libro.titulo.toLowerCase().includes(texto) ||
      libro.autor.toLowerCase().includes(texto);
    const ids = libro.idGeneros || (libro.idGenero ? [libro.idGenero] : []);
    const matchGenero = filtroGenero === null || ids.includes(filtroGenero);
    return matchTexto && matchGenero;
  });

  return (
    <div className="page">
      <div className="container">
        <div className="biblioteca-header">
          <h2 className="biblioteca-titulo">Mi Biblioteca</h2>
          <button className="btn btn-primary" onClick={abrirModalNuevo}>
            + Agregar libro
          </button>
        </div>

        {libros.length > 0 && (
          <div className="filtros">
            <div className="filtros__busqueda">
              <input
                type="text"
                placeholder="Buscar por titulo o autor..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
            {generos.length > 0 && (
              <div className="filtros__generos">
                <button
                  className={`filtro-chip ${filtroGenero === null ? "filtro-chip--activo" : ""}`}
                  onClick={() => setFiltroGenero(null)}
                >
                  Todos
                </button>
                {generos.map((g) => (
                  <button
                    key={g.idGenero}
                    className={`filtro-chip ${filtroGenero === g.idGenero ? "filtro-chip--activo" : ""}`}
                    onClick={() =>
                      setFiltroGenero(filtroGenero === g.idGenero ? null : g.idGenero)
                    }
                  >
                    {g.nombre}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {libros.length === 0 ? (
          <div className="empty-state">
            <span className="empty-state-icon">&#128218;</span>
            <h3>Tu biblioteca esta vacia</h3>
            <p>Agrega tu primer libro para comenzar a organizar tu lectura.</p>
            <button
              className="btn btn-primary"
              onClick={abrirModalNuevo}
            >
              + Agregar libro
            </button>
          </div>
        ) : (
          <div className="grid grid-3">
            {librosFiltrados.length === 0 ? (
              <p className="mensaje-info" style={{ gridColumn: "1 / -1" }}>
                No se encontraron libros con esos filtros.
              </p>
            ) : (
            librosFiltrados.map((libro) => {
              const expandido = libroExpandido === libro.idLibro;
              const generosLibro = nombresGeneros(libro.idGeneros || (libro.idGenero ? [libro.idGenero] : []));

              return (
                <div
                  key={libro.idLibro}
                  className={`libro-card ${expandido ? "libro-card--expandido" : ""}`}
                  onClick={() => toggleExpand(libro.idLibro)}
                >
                  <div className="libro-card__basico">
                    <h3 className="libro-card__titulo">{libro.titulo}</h3>
                    <p className="libro-card__autor">{libro.autor}</p>
                    {libro.estado && (
                      <span
                        className={`libro-card__estado libro-card__estado--${estadoClase[libro.estado] || "por-leer"}`}
                      >
                        {libro.estado}
                      </span>
                    )}
                    {renderEstrellas(libro.puntuacion)}
                  </div>

                  {expandido && (
                    <div className="libro-card__detalle">
                      {generosLibro.length > 0 && (
                        <p>
                          <strong>Generos:</strong> {generosLibro.join(", ")}
                        </p>
                      )}
                      {libro.reseña && (
                        <p>
                          <strong>Reseña:</strong> {libro.reseña}
                        </p>
                      )}
                      <div className="libro-card__acciones">
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={(e) => handleEditar(libro, e)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={(e) => handleEliminar(libro.idLibro, e)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
            )}
          </div>
        )}
      </div>

      {/* Modal libro */}
      <Modal isOpen={modalLibro} onClose={cerrarModalLibro}>
        <h2 className="modal-titulo">{libroEditando ? "Editar libro" : "Agregar libro"}</h2>
        <form className="form-libro" onSubmit={handleSubmitLibro}>
          <input
            type="text"
            name="titulo"
            placeholder="Titulo *"
            value={form.titulo}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="autor"
            placeholder="Autor *"
            value={form.autor}
            onChange={handleChange}
            required
          />
          <select name="estado" value={form.estado} onChange={handleChange}>
            {estadoOpciones.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
          <div className="genero-multi">
            <div className="genero-multi__header">
              <span className="genero-multi__label">Generos</span>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => setModalGenero(true)}
              >
                + Genero
              </button>
            </div>
            <div className="genero-multi__chips">
              {generos.length === 0 && (
                <span className="genero-multi__vacio">No hay generos creados</span>
              )}
              {generos.map((g) => (
                <button
                  key={g.idGenero}
                  type="button"
                  className={`genero-chip-select ${(form.idGeneros || []).includes(g.idGenero) ? "genero-chip-select--activo" : ""}`}
                  onClick={() => toggleGeneroForm(g.idGenero)}
                >
                  {g.nombre}
                </button>
              ))}
            </div>
          </div>
          <select name="puntuacion" value={form.puntuacion} onChange={handleChange}>
            <option value="">Sin puntuacion</option>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {"★".repeat(n)} ({n})
              </option>
            ))}
          </select>
          <textarea
            name="reseña"
            placeholder="Reseña (max. 500 caracteres)"
            value={form["reseña"]}
            onChange={handleChange}
            rows="3"
            maxLength="500"
          />
          {errorForm && <p className="form-error">{errorForm}</p>}
          <div className="form-acciones">
            <button type="submit" className="btn btn-primary" disabled={guardando}>
              {guardando ? "Guardando..." : "Guardar"}
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={cerrarModalLibro}
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>

      {/* Modal genero */}
      <Modal isOpen={modalGenero} onClose={() => setModalGenero(false)}>
        <h2 className="modal-titulo">Crear genero</h2>
        <form className="form-libro" onSubmit={handleSubmitGenero}>
          <input
            type="text"
            placeholder="Nombre del genero *"
            value={nuevoGenero}
            onChange={(e) => setNuevoGenero(e.target.value)}
            required
          />
          <div className="generos-existente">
            {generos.length > 0 && (
              <>
                <p className="generos-existente__titulo">Generos existentes:</p>
                <div className="generos-existente__lista">
                  {generos.map((g) => (
                    <span key={g.idGenero} className="genero-chip">
                      {g.nombre}
                      <button
                        type="button"
                        className="genero-chip__remove"
                        onClick={() => handleEliminarGenero(g.idGenero)}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="form-acciones">
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setModalGenero(false)}
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
