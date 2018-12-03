const MongoClient = require('mongodb').MongoClient;
const mongoConnectionString = require('./key').mongoURI;

let db = undefined;

module.exports = function () {
    return function (req, res, next) {
        if (db === undefined) {
            const client = new MongoClient(mongoConnectionString, {
                useNewUrlParser: true
            });
            client.connect(function (err) {
                if (err) throw err;

                db = client.db('mwa');
                req.db = db;
                next();
            });
        } else {
            req.db = db;
            next();
        }
    }
}