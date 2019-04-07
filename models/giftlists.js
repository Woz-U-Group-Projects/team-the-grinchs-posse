'use strict';
module.exports = (sequelize, DataTypes) => {
  const giftLists = sequelize.define('giftLists', {

    listId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    listTitle: {
      allowNull: false,
      type: DataTypes.STRING
    }

  }, {});

  giftLists.associate = function(models) {
    // associations can be defined here
  };
  return giftLists;
};
