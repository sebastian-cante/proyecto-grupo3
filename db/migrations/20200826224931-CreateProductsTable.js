'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('products', { 
        id: {
          type: Sequelize.INTEGER.UNSIGNED,
          primaryKey : true,
          allowNull : false,
          autoIncrement : true
        },
        product_name: {
            type : Sequelize.STRING(45),
            allowNull : false,
        },
        stock: {
          type : Sequelize.INTEGER(10).UNSIGNED,
          allowNull : false,
        },
        price: {
            type : Sequelize.INTEGER(10).UNSIGNED,
            allowNull : false,
        },
        description: {
            type : Sequelize.TEXT,
            allowNull : false,
        },
        image: {
          type : Sequelize.STRING(200),
          allowNull : false,
        },
        category_id: {
          type: Sequelize.INTEGER.UNSIGNED,
         /* references: {
            model: {
              tableName: 'categories',
              schema:'tecno_store'
            },
            key: 'id'
          },*/
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('products');
  }
};
