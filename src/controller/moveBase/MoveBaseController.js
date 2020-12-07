const moveBaseService = require('../../sevice/moveBase/MoveBaseService');

const setTargetPose = (req, res) => {
    let targetPose = req.targetPose;
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

module.exports = {
    setTargetPose,
};