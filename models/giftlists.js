'use strict';
module.exports = (sequelize, DataTypes) => {
  const giftLists = sequelize.define('giftLists', {
    listTitle: DataTypes.STRING
  }, {});
  giftLists.associate = function(models) {
    // associations can be defined here
  };
  return giftLists;
};