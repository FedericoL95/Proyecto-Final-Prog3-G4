const { Router } = require('express');
const router = Router();
const { getLibros, getLibroById, createLibro, updateLibro, deleteLibro } = require('../controllers/libroController')

router.get('/', getLibros)
router.get('/:id', getLibroById)
router.post('/', createLibro)
router.put('/:id', updateLibro)
router.delete('/:id', deleteLibro)

module.exports = router
