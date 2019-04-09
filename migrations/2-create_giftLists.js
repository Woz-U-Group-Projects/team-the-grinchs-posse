'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "giftLists", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "create_giftLists",
    "created": "2019-04-07T05:43:02.841Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "giftLists",
        {
            "listId": {
                "type": Sequelize.INTEGER,
                "field": "listId",
                "primaryKey": true,
                "autoIncrement": true
            },
            "listTitle": {
                "type": Sequelize.STRING,
                "field": "listTitle",
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
