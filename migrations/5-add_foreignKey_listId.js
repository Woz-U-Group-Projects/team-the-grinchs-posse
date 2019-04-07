'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "listId" to table "gifts"
 * addColumn "giftListListId" to table "gifts"
 *
 **/

var info = {
    "revision": 5,
    "name": "add_foreignKey_listId",
    "created": "2019-04-07T06:16:06.803Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "gifts",
            "listId",
            {
                "type": Sequelize.INTEGER,
                "field": "listId",
                "onUpdate": "CASCADE",
                "onDelete": "SET NULL",
                "references": {
                    "model": "giftLists",
                    "key": "listId"
                },
                "allowNull": true
            }
        ]
    },
    {
        fn: "addColumn",
        params: [
            "gifts",
            "giftListListId",
            {
                "type": Sequelize.INTEGER,
                "field": "giftListListId",
                "onUpdate": "CASCADE",
                "onDelete": "SET NULL",
                "references": {
                    "model": "giftLists",
                    "key": "listId"
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
