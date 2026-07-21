// esto no me acuerdo si figuraba en la pagina, pero es para calcular el progreso de la lectura en %..
export function CalcularProgreso(paginaActual, paginasTotales) {
    if (!paginasTotales || paginasTotales === 0) return 0;
        return Math.round((paginaActual / paginasTotales) * 100);
}