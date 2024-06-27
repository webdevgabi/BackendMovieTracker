const find = require('./find');
const insertOne = require('./insertOne');
const connect = require('./connect');

module.exports = {
    connect: connect,
    insertOne: insertOne,
    find: find
}