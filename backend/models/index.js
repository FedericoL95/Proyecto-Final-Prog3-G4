const { Sequelize } = require('sequelize');
const config = require('../config/database');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging,
  }
);

// IMPORTAR MODELOS
const UserModel = require('./User');
const LibroModel = require('./Libro');
const GeneroModel = require('./Genero');
const LibroUsuarioModel = require('./LibroUsuario');

// INICIALIZAR MODELOS
const User = UserModel(sequelize);
const Libro = LibroModel(sequelize);
const Genero = GeneroModel(sequelize);
const LibroUsuario = LibroUsuarioModel(sequelize);

// GUARDAR EN DB
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User;
db.Libro = Libro;
db.Genero = Genero;
db.LibroUsuario = LibroUsuario;
// Muchos a muchos
db.User.belongsToMany(db.Libro, {
  through: db.LibroUsuario,
  foreignKey: 'idUsuario'
});

db.Libro.belongsToMany(db.User, {
  through: db.LibroUsuario,
  foreignKey: 'idLibro'
});

// Uno a muchos
db.Genero.hasMany(db.Libro, {
  foreignKey: 'idGenero',
  as: 'libros'
});

db.Libro.belongsTo(db.Genero, {
  foreignKey: 'idGenero',
  as: 'genero'
});

module.exports = db;