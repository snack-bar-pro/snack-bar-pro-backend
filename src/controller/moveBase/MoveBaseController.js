const moveBaseService = require('../../service/moveBase/MoveBaseService');

const setTargetPose = (req, res) => {
    let targetPose = req.body.targetPose;
    try {
        moveBaseService.setTargetPoseGoal(targetPose);
        return res.json({
            status: 200,
            message: 'Bravo! Set target success !',
        })
    }
    catch (e) {
        return res.json({
            message: e.message,
            status: 500,
        });
    }
};

const getMoveBaseStatus = (req, res) => {
    const reached =  moveBaseService.getMoveBaseStatus();
    return res.json({
        status: 200,
        reached,
    })
}

module.exports = {
    setTargetPose,
    getMoveBaseStatus
};
