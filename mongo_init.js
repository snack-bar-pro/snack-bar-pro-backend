const mongoClient = require('mongodb').MongoClient;
const chalk = require('chalk');
const assert = require('assert');
let mongoDb = null;

function connect() {
    let opt = {
        'readPreference': 'nearest',
    };
    if (mongoDb) {
        return mongoDb;
    }
    let uri = 'mongodb://172.17.25.199:27017/snackbar';
    console.log(chalk.green(`connect snackbar native mongodb url ${uri}`));
    mongoClient.connect(uri, opt, function (err, client) {
        assert.strictEqual(null, err);
        if (uri.endsWith('snackbar')) {
            mongoDb = client.db('snackbar');
        }
        else {
            mongoDb = client.db();
        }
        console.log(chalk.green(`connect snackbar native mongodb success on db ${mongoDb.toString()}`));
    });
}
async function disconnect () {
    mongoDb.close().catch(error => {
        console.error(error);
        console.error(chalk.red('Can not disconnected from native MongoDB!'));
    });
    console.info(chalk.yellow('Disconnected from native MongoDB.'));
}
async function getDB () {
    if (!mongoDb) {
        await connect();
    }
    return mongoDb;
}

async function getCollection (name) {
    await getDB();
    return mongoDb.collection(name);
}
module.exports = {
    connect,
    disconnect,
    getCollection,
};
