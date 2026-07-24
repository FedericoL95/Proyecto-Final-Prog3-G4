// con esto verifico que los los datos requeridos del libro no esten vacios.
export function ValidarDatosLibro(libro) {
    const camposRequeridos = ["titulo", "autor", "estado"];
    return camposRequeridos.every( (campo) => libro[campo] && libro[campo].toString().trim() !== "");
}