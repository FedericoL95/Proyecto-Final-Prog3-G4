const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const LibrosUsuario = sequelize.define('LibrosUsuario', {
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

  return LibrosUsuario;
};
