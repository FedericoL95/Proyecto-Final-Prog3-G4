const { Libro, LibroUsuario, Genero } = require('../models');

const getLibros = async (req, res) => {
  try {
    const usuarioId = req.user.id;
    const usuario = await LibroUsuario.findAll({
      where: { idUsuario: usuarioId },
      include: [{ model: Libro, as: 'libro' }]
    });
    const libros = usuario.map(u => u.libro);
    res.status(200).json(libros);
  } catch (error) {
    console.error('Error al obtener libros:', error);
    res.status(500).json({ error: 'Error al obtener libros' });
  }
};

const getLibroById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioId = req.user.id;
    const relacion = await LibroUsuario.findOne({
      where: { idUsuario: usuarioId, idLibro: id },
      include: [{ model: Libro, as: 'libro' }]
    });
    if (!relacion) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }
    res.status(200).json(relacion.libro);
  } catch (error) {
    console.error('Error al obtener libro:', error);
    res.status(500).json({ error: 'Error al obtener libro' });
  }
};

const createLibro = async (req, res) => {
  try {
    const usuarioId = req.user.id;
    const libro = await Libro.create(req.body);
    await LibroUsuario.create({
      idUsuario: usuarioId,
      idLibro: libro.idLibro
    });
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
    const usuarioId = req.user.id;
    const relacion = await LibroUsuario.findOne({
      where: { idUsuario: usuarioId, idLibro: id }
    });
    if (!relacion) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }
    const libro = await Libro.findByPk(id);
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
    const usuarioId = req.user.id;
    const relacion = await LibroUsuario.findOne({
      where: { idUsuario: usuarioId, idLibro: id }
    });
    if (!relacion) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }
    await relacion.destroy();
    const otrasRelaciones = await LibroUsuario.count({ where: { idLibro: id } });
    if (otrasRelaciones === 0) {
      const libro = await Libro.findByPk(id);
      if (libro) await libro.destroy();
    }
    res.status(200).json({ message: 'Libro eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar libro:', error);
    res.status(500).json({ error: 'Error al eliminar libro' });
  }
};

module.exports = {
  getLibros, getLibroById, createLibro, updateLibro, deleteLibro
};
