// muetra la fecha en formato que usamos nosotros 
export function FormatDate(fecha) {
    return new Date(fecha).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
});
}