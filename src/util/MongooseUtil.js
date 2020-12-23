'use strict';

const chalk = require('chalk');
const mongoose = require('mongoose');

let db = null;
const loadModels = function () {
    const modelPatterns = glob.sync(`${path.join(__dirname, '../model')}/*.model.js`);
    modelPatterns.forEach(modelPath => {
        require(modelPath);
    });
};
function connect () {
    loadModels();
    let opt = {
        'readPreference': 'nearest',
    };
    if (db) {
        return db;
    }
    let uri = 'mongodb://localhost:27017/snackbar';
    console.log(chalk.green(`connect gps mongodb url ${uri}`));
    db = mongoose.createConnection(uri, opt);
    return db;
}
async function disconnect () {
    await db.disconnect().catch(error => {
        console.log(error);
        console.info(chalk.red('Can not disconnected from MongoDB!'));
    });
    console.info(chalk.yellow('Disconnected from MongoDB.'));
}

module.exports = {
    connect,
    disconnect,
};
