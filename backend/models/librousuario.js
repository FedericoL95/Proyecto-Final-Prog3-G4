<<<<<<< HEAD
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Libro = sequelize.define('LibrosUsuario', {
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'idUsuario'
      }
    },
    IdLibro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Libro',
        key: 'idLibro'
      }
    }
  }, {
    tableName: 'libros',
    timestamps: true
   });
  return Libro;
};
=======
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LibroUsuario = sequelize.define('LibroUsuario', {
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    },
    idLibro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'libros',
        key: 'idLibro'
      }
    }
  }, {
    tableName: 'libros_usuarios',
    timestamps: true
   });
  return LibroUsuario;
};
>>>>>>> 43d0b2abc4ab08f26f0c96e117887fc885e3c3a2
