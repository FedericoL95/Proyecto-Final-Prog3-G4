import api from "./api";

export const obtenerLibros = () =>
  api.get("/libros");

export const obtenerLibro = (id) =>
  api.get(`/libros/${id}`);

export const crearLibro = (data) =>
  api.post("/libros", data);

export const editarLibro = (id, data) =>
  api.put(`/libros/${id}`, data);

export const eliminarLibro = (id) =>
  api.delete(`/libros/${id}`);