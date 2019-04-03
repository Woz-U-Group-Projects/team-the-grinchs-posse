'use strict';
module.exports = (sequelize, DataTypes) => {
  const giftLists = sequelize.define('giftLists', {
    listTitle: DataTypes.STRING
  }, {});
  giftLists.associate = function(models) {
    // giftLists belongsTo users.
    giftLists.belongsTo (models.users, {foreignKey: 'listOwner'} );
  };
  return giftLists;
};
