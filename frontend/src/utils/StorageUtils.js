// Guarda datos en el almacenamiento local
export function saveToStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

// Recupera datos guardados
export function getFromStorage(clave) {
    const data = localStorage.getItem(clave);
    return data ? JSON.parse(data) : null;
}

// Elimina datos guardados
export function removeFromStorage(clave) {
    localStorage.removeItem(clave);
}