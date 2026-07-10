const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mi_base', 'mi_usuario', 'mi_password', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
