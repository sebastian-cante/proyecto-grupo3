'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('carts_products', { 
        id: {
          type : Sequelize.INTEGER.UNSIGNED,
          primaryKey : true,
          allowNull : false,
          autoIncrement : true
        },
        carts_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          references: {
            model: {
              tablename: 'carts',
            },
            key: 'id'
          },
        },
        products_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          references: {
            model: {
              tablename: 'products',
            },
            key: 'id'
          },
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('carts_products');
  }
};
