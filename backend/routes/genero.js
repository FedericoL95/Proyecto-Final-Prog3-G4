const { Router } = require('express');
const router = Router();
const { getGeneros, getGeneroById, createGenero, updateGenero, deleteGenero } = require('../controllers/generosController')

router.get('/', getGeneros )
router.get('/:id', getGeneroById)
router.post('/', createGenero)
router.put('/:id', updateGenero)
router.delete('/:id', deleteGenero)

module.exports = router
