'use strict';

const chalk = require('chalk');
const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');

const loadModels = function () {
    console.log(`${path.join(__dirname, '../model')}/*.model.js`);
    const modelPatterns = glob.sync(`${path.join(__dirname, '../model')}/*.model.js`);
    modelPatterns.forEach(modelPath => {
        require(modelPath);
    });
};
async function connect () {
    loadModels();
    let opt = {
        'readPreference': 'nearest',
    };
    let uri = 'mongodb://172.17.25.199:27017/snackbar';
    let db = await mongoose.connect(uri, opt).catch(error => {
        console.error(chalk.red('Could not connect to MongoDB!'));
        console.log(error);
    });
    // Enabling mongoose debug mode if required
    return db;
}
async function disconnect () {
    await mongoose.disconnect().catch(error => {
        console.log(error);
        console.info(chalk.red('Can not disconnected from MongoDB!'));
    });
    console.info(chalk.yellow('Disconnected from MongoDB.'));
}

module.exports = {
    connect,
    disconnect,
};
