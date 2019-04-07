'use strict';
module.exports = (sequelize, DataTypes) => {
  const gifts = sequelize.define('gifts', {
    giftId: DataTypes.INTEGER,
    giftName: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  gifts.associate = function(models) {
    // associations can be defined here
  };
  return gifts;
};