// Model for Users table
// Gift Wish List project
//
// Robert Hieger
// March 27, 2019

//  Strict JavaScript mode:

'use strict';

module.exports = (sequelize, DataTypes) =>  {

    const users = sequelize.define(

        'users',
        {
            UserId: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            userName: DataTypes.STRING,
            password: DataTypes.STRING
        },
        {
            timestamps: false
        }

    );   // end const users

    // Return model of table:

    return users;

};
