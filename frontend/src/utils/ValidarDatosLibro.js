// con esto verificamos que los los datos requeridos del libro no esten vacios.
export function validateBookData(libro) {
    const camposRequeridos = ["titulo", "autor", "estado"];
    return camposRequeridos.every( (campo) => libro[campo] && libro[campo].toString().trim() !== "");
}