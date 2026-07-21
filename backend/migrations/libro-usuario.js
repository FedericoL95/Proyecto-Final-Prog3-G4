<<<<<<< HEAD
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('libros_usuarios', {
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'idUsuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idLibro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'libros',
          key: 'idLibro'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('libros_usuarios');
  }
=======
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('libros_usuarios', {
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuario',
          key: 'idUsuario'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idLibro: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'libros',
          key: 'idLibro'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('libros_usuarios');
  }
>>>>>>> 43d0b2abc4ab08f26f0c96e117887fc885e3c3a2
};