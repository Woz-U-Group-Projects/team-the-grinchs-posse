'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'Robert',
        lastName: 'Hieger',
        userName: 'rlhieger',
        password: '$@mpleP@sswd'
      },
      {
        firstName: 'Jane',
        lastName: 'Gotshalk',
        userName: 'jgotshalk',
        password: '$@mpleP@sswd'
      },
      {
        firstName: 'Jesse',
        lastName: 'Linde',
        userName: 'jlinde',
        password: '$@mpleP@sswd'
      },
      {
        firstName: 'Daniel',
        lastName: 'Dash',
        userName: 'dandash',
        password: '$@mpleP@sswd'
      },
      {
        firstName: 'Patrick',
        lastName: 'Jarolim, Jr.',
        userName: 'pjarolim',
        password: '$@mpleP@sswd'
      }

  ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete( 'users', null, {} );
    
  }
};
