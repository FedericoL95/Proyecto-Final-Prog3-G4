const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Genero = sequelize.define('Genero', {
    idGenero: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'idUsuario'
      }
    }
  }, {
    tableName: 'generos',
    timestamps: true
  });
  return Genero;
};