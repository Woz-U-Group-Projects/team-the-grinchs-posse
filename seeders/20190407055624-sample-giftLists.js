'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('giftLists', [
      
      {
        listTitle: 'Bobby\'s Wish List',
        listOwner: 1
      },
      {
        listTitle: 'Jane\'s Wish List',
        listOwner: 2
      },
      {
        listTitle: 'Jesse\'s Wish List',
        listOwner: 3
      },
      {
        listTitle: 'Dan\'s Wish List',
        listOwner: 4
      },
      {
        listTitle: 'Patrick\'s Wish List',
        listOwner: 5
      }

    ],
    
    {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete( 'giftLists', null, {} );
  
  }

};
