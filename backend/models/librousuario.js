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