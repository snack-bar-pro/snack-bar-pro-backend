const rosUtil = require('../../util/ros.util');
const { getReached, setReached } = require('../../data/MoveBaseResult')

/** move base client set up **/
const SERVER_NAME = 'move_base';

const setTargetPoseGoal = params => {
    /** create pose **/
    let pose = _getPose(params);
    /** create goal message **/
    let goalMessage = _getGoalMessage(pose);
    /** create goal **/
    let goal = _buildGoal(goalMessage);
    /** send message **/
    goal.send();
};

const getMoveBaseStatus = () => {
    const result = getReached();
    setReached(false);
    return result;
}

const _buildGoal = goalMessage => {
    const moveBaseClient = rosUtil.clientMaker(SERVER_NAME, 'move_base_msgs/MoveBaseAction');
    moveBaseClient.ros.connect('ws://172.17.25.199:9090');
    return rosUtil.goalMaker(moveBaseClient, goalMessage);
};

const _getGoalMessage = pose => {
    return rosUtil.generateGoalMessage('map', pose);
};


const _getPose = params => {
    return rosUtil.poseMaker(params);
};

module.exports = {
    setTargetPoseGoal,
    getMoveBaseStatus
};
