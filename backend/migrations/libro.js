'use strict';

module.exports = {
async up(queryInterface, Sequelize) {
    await queryInterface.createTable('libros', {
    idLibro: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    puntuacion: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    reseña: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    idGenero: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'generos', 
        key: 'idGenero'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT' //no podés borrar un género si tiene libros asociados
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
    }
    });
},

async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('libros');
}
};