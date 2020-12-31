let reached = false;
const getReached = () => {
    return reached;
}
const setReached = value => {
    reached = value;
}
module.exports = {
    getReached,
    setReached
};