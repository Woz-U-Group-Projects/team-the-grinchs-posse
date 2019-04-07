'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {

    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }

  }, {});
  
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
