'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "userUserId" to table "gifts"
 * addColumn "buyerId" to table "gifts"
 *
 **/

var info = {
    "revision": 6,
    "name": "add_foreignKey_buyerId",
    "created": "2019-04-07T06:24:01.378Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "gifts",
            "buyerId",
            {
                "type": Sequelize.INTEGER,
                "field": "buyerId",
                "onUpdate": "CASCADE",
                "onDelete": "SET NULL",
                "references": {
                    "model": "users",
                    "key": "userId"
                },
                "allowNull": true
            }
        ]
    }
];

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
