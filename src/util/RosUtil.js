import {existentialTypeParam} from "babel-types";

const config = require('../../lib/config').config;
const ROSLIB = require('roslib');

const topicMaker = (topicName, type) => {
    return new ROSLIB.Topic({
        ros: config.ros,
        name: topicName,
        messageType: type,
    });
};

const clientMaker = (serverName, actionName) => {
    return new ROSLIB.ActionClient({
        ros: config.ros,
        serverName: `/${serverName}`,
        actionName: actionName,
    });
};

const poseMaker = ({position, orientation}) => {
    return new ROSLIB.Pose({
        position: position,
        orientation: orientation,
    });
};

const goalMaker = (client, goalMessage) => {
    return new ROSLIB.Goal({
        actionClient: client,
        goalMessage: goalMessage,
    })
};

const generateGoalMessage = (frameId, pose) => {
    return {
        target_pose: {
            header: {
                frame_id: frameId,
            },
            pose: pose,
        }

    }
};

module.exports = {
    topicMaker,
    clientMaker,
    poseMaker,
    goalMaker,
    generateGoalMessage,
};