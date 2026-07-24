const { Router } = require('express');
const router = Router();
const { verificarToken } = require('../middleware/auth');
const { getGeneros, getGeneroById, createGenero, updateGenero, deleteGenero } = require('../controllers/generosController')

router.get('/', verificarToken, getGeneros)
router.get('/:id', verificarToken, getGeneroById)
router.post('/', verificarToken, createGenero)
router.put('/:id', verificarToken, updateGenero)
router.delete('/:id', verificarToken, deleteGenero)

module.exports = router
