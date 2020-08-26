'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('carts', { 
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        total: {
            type : Sequelize.INTEGER(10).UNSIGNED,
            allowNull : false,
        },
        users_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          references: {
            model: {
              tablename: 'users',
            },
            key: 'id'
          },
        },
        adresses_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          references: {
            model: {
              tablename: 'adresses',
            },
            key: 'id'
          },
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('carts');
  }
};
