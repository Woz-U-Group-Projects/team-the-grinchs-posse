'use strict';
module.exports = (sequelize, DataTypes) => {
  const giftList = sequelize.define('giftList', {
    listTitle: DataTypes.STRING
  }, {});
  giftList.associate = function(models) {
    // associations can be defined here
  };
  return giftList;
};