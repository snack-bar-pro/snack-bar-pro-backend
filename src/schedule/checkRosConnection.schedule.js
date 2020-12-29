const schedule = require('node-schedule');
const config = require('../../lib/config');
const ros = require('../../roslibjs_init');
const _ = require('loadsh');
const chalk = require('chalk');

const checkRosConnection = ()=>{
    schedule.scheduleJob('5 * * * * *',()=>{
        if (_.isEmpty(config.ros)) {
            console.info(chalk.green('=====checking ros connection==='));
            console.info(chalk.green(`==== ros: ${config.ros} ====`));
            console.error(chalk.red('Could not connect to ros websocket!'));
            config.ros = ros.init();
        }
        else {
            console.info(chalk.green('connected to ros websocket!'));
        }
    });
};

module.exports = {
    checkRosConnection,
};
