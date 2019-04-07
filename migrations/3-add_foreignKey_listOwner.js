'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "userUserId" to table "giftLists"
 * addColumn "listOwner" to table "giftLists"
 *
 **/

var info = {
    "revision": 3,
    "name": "add_foreignKey_listOwner",
    "created": "2019-04-07T05:50:48.033Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "giftLists",
            "userUserId",
            {
                "type": Sequelize.INTEGER,
                "field": "userUserId",
                "onUpdate": "CASCADE",
                "onDelete": "SET NULL",
                "references": {
                    "model": "users",
                    "key": "userId"
                },
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "giftLists",
            "listOwner",
            {
                "type": Sequelize.INTEGER,
                "field": "listOwner",
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
