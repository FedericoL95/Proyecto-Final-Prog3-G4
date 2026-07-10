// Ordena los librios por el titulo, si alguien quiere ordenar por otra cosa, cambie la primera linea del codigo donde dice "campo = "titulo"
export function OrdenarLibros(libros, campo = "titulo") {
    return [...libros].sort((a, b) =>
    a[campo].toString().localeCompare(b[campo].toString())
    );
}