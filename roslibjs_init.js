const ROSLIB = require('roslib')

module.exports.init = () => {
    console.log('=======init ros==========')
    const ros = new ROSLIB.Ros({
        //rosbridge
        url : 'ws://localhost:9090'
    });

    ros.on('connection', function() {
        console.log('Connected to websocket server.');
    });

    ros.on('error', function(error) {
        console.log('Error connecting to websocket server: ', error);
    });

    ros.on('close', function() {
        console.log('Connection to websocket server closed.');
    });
    return ros;
}


