'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('giftLists', [
      {
        listOwner: 1,
        listTitle: 'Bobby\'s Wish List'
      },
      {
        listOwner: 2,
        listTitle: 'Jane\'s Wish List'
      },
      {
        listOwner: 3,
        listTitle: 'Jesse\'s Wish List'
      },
      {
        listOwner: 4,
        listTitle: 'Daniel\'s Wish List'
      },
      {
        listOwner: 5,
        listTitle: 'Patrick\'s Wish List'
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('giftLists', null, {});
  }
};
