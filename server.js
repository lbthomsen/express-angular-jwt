/*
 * Primary Server process
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config'),
    mongoose = require('./config/mongoose'),
    passport = require('./config/passport'),
    express = require('./config/express'),     
    db = mongoose(),
    passport = passport(),
    app = express();

app.listen(config.port);

module.exports = app;

console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);

/* 
 * vim: ts=4 et nowrap autoindent
 */