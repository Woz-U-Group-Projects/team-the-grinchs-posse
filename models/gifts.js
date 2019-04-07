'use strict';
module.exports = (sequelize, DataTypes) => {

  const gifts = sequelize.define('gifts', {

    giftId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    giftName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    }

  }, {});
  gifts.associate = function(models) {
    // associations can be defined here
  };

  return gifts;

};
