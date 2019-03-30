// sampleUsers Seed for sample user table data
//
// Robert Hieger
//
// March 30, 2019

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          firstName: 'Robert',
          lastName: 'Hieger',
          userName: 'rlhieger',
          password: '$@mpleP@$$wd'
        },
        {
          firstName: 'Jane',
          lastName: 'Gotshalk',
          userName: 'jgotshalk',
          password: '$@mpleP@$$wd'
        },
        {
          firstName: 'Jesse',
          lastName: 'Linde',
          userName: 'jlinde',
          password: '$@mpleP@$$wd'
        },
        {
          firstName: 'Daniel',
          lastName: 'Dash',
          userName: 'dandash',
          password: '$@mpleP@$$wd'
        },
        {
          firstName: 'Patrick',
          lastName: 'Jarolim, Jr.',
          userName: 'pjarolim',
          password: '$@mpleP@$$wd'
        }
      ], {});
  },    // end up:

  down: (queryInterface, Sequelize) => {
    return  queryInterface.bulkDelete( 'users', null, {} );  
  }   // end down:
};
