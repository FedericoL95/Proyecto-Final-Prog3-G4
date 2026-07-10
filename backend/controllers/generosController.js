const { Genero } = require('../models');

const getGeneros = async (req, res) => {
  try {
    const generos = await Genero.findAll();
    res.status(200).json(generos);
  } catch (error) {
    console.error('Error al obtener géneros:', error);
    res.status(500).json({ error: 'Error al obtener géneros' });
  }
};

const getGeneroById = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await Genero.findByPk(id);
    if (!genero) {
      return res.status(404).json({ error: 'Género no encontrado' });
    }
    res.status(200).json(genero);
  } catch (error) {
    console.error('Error al obtener género:', error);
    res.status(500).json({ error: 'Error al obtener género' });
  }
};

const createGenero = async (req, res) => {
  try {
    const genero = await Genero.create(req.body);
    res.status(201).json({ message: 'Género creado exitosamente', genero });
  } catch (error) {
    console.error('Error al crear género:', error);
    res.status(500).json({ error: 'Error al crear género' });
  }
};

const updateGenero = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await Genero.findByPk(id);
    if (!genero) {
      return res.status(404).json({ error: 'Género no encontrado' });
    }
    await genero.update(req.body);
    res.status(200).json({ message: 'Género actualizado exitosamente', genero });
  } catch (error) {
    console.error('Error al actualizar género:', error);
    res.status(500).json({ error: 'Error al actualizar género' });
  }
};

const deleteGenero = async (req, res) => {
  try {
    const { id } = req.params;
    const genero = await Genero.findByPk(id);
    if (!genero) {
      return res.status(404).json({ error: 'Género no encontrado' });
    }
    await genero.destroy();
    res.status(200).json({ message: 'Género eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar género:', error);
    res.status(500).json({ error: 'Error al eliminar género' });
  }
};

module.exports = {
  getGeneros, getGeneroById, createGenero, updateGenero, deleteGenero
};
