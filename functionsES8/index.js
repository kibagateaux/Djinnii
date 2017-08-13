const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const src = require('./src')

exports.addMovesStoryline = src.database.addMovesStoryline(functions, admin);