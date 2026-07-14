const { Libro } = require('../models');

const getLibros = async (req, res) => {
  try {
    const libros = await Libro.findAll();
    res.status(200).json(libros);
  } catch (error) {
    console.error('Error al obtener libros:', error);
    res.status(500).json({ error: 'Error al obtener libros' });
  }
};

const getLibroById = async (req, res) => {
  try {
    const { id } = req.params;
    const libro = await Libro.findByPk(id);
    if (!libro) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }
    res.status(200).json(libro);
  } catch (error) {
    console.error('Error al obtener libro:', error);
    res.status(500).json({ error: 'Error al obtener libro' });
  }
};

const createLibro = async (req, res) => {
  try {
    const libro = await Libro.create(req.body);
    res.status(201).json({ message: 'Libro creado exitosamente', libro });
  } catch (error) {
    console.error('Error al crear libro:', error);
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeForeignKeyConstraintError') {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: 'Error al crear libro' });
  }
};

const updateLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libro = await Libro.findByPk(id);
    if (!libro) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }
    await libro.update(req.body);
    res.status(200).json({ message: 'Libro actualizado exitosamente', libro });
  } catch (error) {
    console.error('Error al actualizar libro:', error);
    res.status(500).json({ error: 'Error al actualizar libro' });
  }
};

const deleteLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const libro = await Libro.findByPk(id);
    if (!libro) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }
    await libro.destroy();
    res.status(200).json({ message: 'Libro eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar libro:', error);
    res.status(500).json({ error: 'Error al eliminar libro' });
  }
};

module.exports = {
  getLibros, getLibroById, createLibro, updateLibro, deleteLibro
};
