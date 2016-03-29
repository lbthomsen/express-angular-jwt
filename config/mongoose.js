/*
 * mongoose.js
 */

var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);

    // Uncomment the following line to enable debug
    mongoose.set('debug', true);

    require('../app/models/users.server.model');
    //require('../app/models/settings.server.model');
    //require('../app/models/channel.server.model');
    //require('../app/models/channelData.server.model');

    return db;

};

/*
 * vim: ts=4 et nowrap autoindent
 */
