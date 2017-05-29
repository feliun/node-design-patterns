const postgres = require('./postgres');
const mongo = require('./mongo');
const mysql = require('./mysql');

// different strategies, same interface
// easy to replace, add, remove or interchange

const dbByConfig = {
  0: postgres,
  1: mysql,
  2: mongo
};

const random = Math.floor(Math.random() * 3);
const db = dbByConfig[random];
db.save({});
db.update({});
db.delete({});
