let reached = false;
let atHome = false;

const getReached = () => {
    return reached;
}

const setReached = value => {
    reached = value;
}

const getAtHome = () => {
    return atHome;
}

const setAtHome = value => {
    atHome = value;
}

module.exports = {
    getReached,
    setReached,
    getAtHome,
    setAtHome
};