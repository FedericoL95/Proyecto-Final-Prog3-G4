<<<<<<< HEAD
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Libro = sequelize.define('Libro', {
    idLibro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5
      }
    },
    reseña: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0, 500]
      }
    },
    idGenero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'generos',
        key: 'idGenero'
      }
    }
  }, {
    tableName: 'libros',
    timestamps: true
   });
  return Libro;
=======
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Libro = sequelize.define('Libro', {
    idLibro: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM(['por leer','leyendo','leído']),
      allowNull: false,
      },
    puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 5
      }
    },
    reseña: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0, 500]
      }
    },
    idGenero: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'generos',
        key: 'idGenero'
      }
    }
  }, {
    tableName: 'libros',
    timestamps: true
   });
  return Libro;
>>>>>>> 43d0b2abc4ab08f26f0c96e117887fc885e3c3a2
};