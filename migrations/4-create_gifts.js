'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "gifts", deps: []
 *
 **/

var info = {
    "revision": 4,
    "name": "create_gifts",
    "created": "2019-04-07T06:09:52.404Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "gifts",
        {
            "giftId": {
                "type": Sequelize.INTEGER,
                "field": "giftId",
                "primaryKey": true,
                "autoIncrement": true
            },
            "giftName": {
                "type": Sequelize.STRING,
                "field": "giftName",
                "allowNull": false
            },
            "description": {
                "type": Sequelize.STRING,
                "field": "description",
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
