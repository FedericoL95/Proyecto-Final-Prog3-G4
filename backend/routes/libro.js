const { Router } = require('express');
const router = express.Router();
const { getLibros, getLibroById, createLibro, updateLibro, deleteLibro } = require('../controllers/libroController')

rutas.get('/', getLibros)
rutas.get('/:id', getLibroById)
rutas.post('/', createLibro)
rutas.put('/:id', updateLibro)
rutas.delete('/:id', deleteLibro)

module.exports = rutas