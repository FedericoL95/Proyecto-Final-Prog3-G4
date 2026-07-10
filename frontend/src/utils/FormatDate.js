// muetra la fecha en formato que usamos nosotros 
export function formatDate(fecha) {
    return new Date(fecha).toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
});
}