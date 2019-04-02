'use strict';
module.exports = (sequelize, DataTypes) => {
  const giftLists = sequelize.define('giftLists', {
    listName: DataTypes.STRING
  }, {});
  giftLists.associate = function(models) {
    // associations can be defined here
  };
  return giftLists;
};