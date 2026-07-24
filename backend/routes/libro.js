const { Router } = require('express');
const router = Router();
const { verificarToken } = require('../middleware/auth');
const { getLibros, getLibroById, createLibro, updateLibro, deleteLibro } = require('../controllers/libroController')

router.get('/', verificarToken, getLibros)
router.get('/:id', verificarToken, getLibroById)
router.post('/', verificarToken, createLibro)
router.put('/:id', verificarToken, updateLibro)
router.delete('/:id', verificarToken, deleteLibro)

module.exports = router
