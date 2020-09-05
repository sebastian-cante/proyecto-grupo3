'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('adresses', { 
        id: {
          type : Sequelize.INTEGER.UNSIGNED,
          primaryKey : true,
          allowNull : false,
          autoIncrement : true
      },
      street: {
          type : Sequelize.STRING(45),
          allowNull : false,

      },
      number: {
          type : Sequelize.INTEGER(11),
          allowNull : false,

      },
      city: {
          type : Sequelize.STRING(45),
          allowNull : false,

      },
      province: {
          type : Sequelize.STRING(45),
          allowNull : false
      }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('adresses');
  }
};
