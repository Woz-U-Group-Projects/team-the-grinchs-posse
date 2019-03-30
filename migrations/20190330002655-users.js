'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return [
      queryInterface.createTable(
        'users',
        {
          userId:  {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
          firstName:   {
            type: Sequelize.STRING,
            allowNull: false
          },
          lastName:  {
            type: Sequelize.STRING,
            allowNull: false
          },
          userName:  {
            type: Sequelize.STRING,
            allowNull: false
          },
          password:  {
            type: Sequelize.STRING,
            allowNull: false
          }
        },
        {
          engine: 'InnoDB',   // default storage engine
          charset: 'utf8'
        }
      )
    ];
  },  // end up:

  down: (queryInterface, Sequelize) => {
    return [
      [queryInterface.dropTable('users')]
    ];
  }
};  // end down:
