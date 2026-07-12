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
