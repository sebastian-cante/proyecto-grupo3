'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { 
        id: {
          type : Sequelize.INTEGER.UNSIGNED,
          primaryKey : true,
          allowNull : false,
          autoIncrement : true
        },
        user_name: {
          type : Sequelize.STRING(45),
            allowNull : false,
        },
        email: {
          type : Sequelize.STRING(45),
          allowNull : false,
        },
        password: {
          type : Sequelize.STRING(200),
          allowNull : false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users');
  }
};
