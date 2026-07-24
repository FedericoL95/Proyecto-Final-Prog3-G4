//filta los libros por estado, si alguien quiere filtrar por otra cosa, cambie la primera linea del codigo donde dice "estado"
export function FiltrarLibros(libros, estado) {
    return libros.filter((libro) => libro.estado === estado);
}