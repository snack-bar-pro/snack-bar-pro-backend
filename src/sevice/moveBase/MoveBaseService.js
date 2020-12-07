const rosUtil = require('../../util/RosUtil');

/** move base client set up **/
const SERVER_NAME = 'move_base';



const moveBaseClient = rosUtil.clientMaker(SERVER_NAME, 'move_base_msgs/MoveBaseActionGoal');


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

const _buildGoal = goalMessage => {
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
};
