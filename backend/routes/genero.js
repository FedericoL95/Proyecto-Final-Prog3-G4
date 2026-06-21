const { Router } = require('express');
const router = express.Router();
const { getGeneros, getGeneroById, createGenero, updateGenero, deleteGenero } = require('../controllers/generosController')

rutas.get('/', getGeneros )
rutas.get('/:id', getGeneroById)
rutas.post('/', createGenero)
rutas.put('/:id', updateGenero)
rutas.delete('/:id', deleteGenero)

module.exports = rutas