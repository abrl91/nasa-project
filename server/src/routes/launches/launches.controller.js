const { launches } = require("../../models/launches.model");

function getAllLaunches(req, res) {
    const launchesObj = Array.from(launches.values());
    return res.status(200).json(launchesObj);
}

module.exports = {
    getAllLaunches
}