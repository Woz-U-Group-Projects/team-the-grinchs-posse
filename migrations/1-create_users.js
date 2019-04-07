'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "create_users",
    "created": "2019-04-07T05:25:33.913Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "users",
        {
            "userId": {
                "type": Sequelize.INTEGER,
                "field": "userId",
                "primaryKey": true,
                "autoIncrement": true
            },
            "firstName": {
                "type": Sequelize.STRING,
                "field": "firstName",
                "allowNull": false
            },
            "lastName": {
                "type": Sequelize.STRING,
                "field": "lastName",
                "allowNull": false
            },
            "userName": {
                "type": Sequelize.STRING,
                "field": "userName",
                "allowNull": false
            },
            "password": {
                "type": Sequelize.STRING,
                "field": "password",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
