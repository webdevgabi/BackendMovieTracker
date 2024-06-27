const connect = require('./connect');
const insertOne = require('./insertOne');
const find = require('./find');
const deleteOne = require('./deleteOne');

module.exports = {
    connect: connect,
    insertOne: insertOne,
    find: find,
    deleteOne: deleteOne
}