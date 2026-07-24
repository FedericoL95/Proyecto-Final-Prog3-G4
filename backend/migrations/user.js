<<<<<<< HEAD
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('usuario');
}
=======
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
    await queryInterface.createTable('usuario', {
    idUsuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('usuario');
}
>>>>>>> 43d0b2abc4ab08f26f0c96e117887fc885e3c3a2
};