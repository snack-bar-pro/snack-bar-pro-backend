const ROSLIB = require('roslib')

const {setReached} = require('./src/data/MoveBaseResult')

module.exports.init = () => {
    console.log('=======init ros==========')
    const ros = new ROSLIB.Ros({
        //rosbridge
        url : 'ws://172.17.25.199:9090'
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

    const listener = new ROSLIB.Topic({
        ros : ros,
        name : '/move_base/result',
        messageType : 'move_base_msgs/MoveBaseActionResult'
    });

    listener.subscribe(function(message) {
        if (message.status.status === 3) {
            setReached(true);
        }
        console.log('Received message on ' + listener.name + ': ' + JSON.stringify(message));
    });

    // https://blog.csdn.net/Draonly/article/details/103292502
    
    return ros;
}


