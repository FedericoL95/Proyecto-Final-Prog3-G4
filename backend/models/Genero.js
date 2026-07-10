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
    }
  }, {
    tableName: 'generos',
    timestamps: true
  });
  return Genero;
};