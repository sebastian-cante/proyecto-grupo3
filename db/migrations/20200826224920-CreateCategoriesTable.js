'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('categories', { 
        id: {
          type : Sequelize.INTEGER.UNSIGNED,
          primaryKey : true,
          allowNull : false,
          autoIncrement : true
        },
      name: {
          type : Sequelize.STRING(45),
          allowNull : false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('categories');
  }
};
