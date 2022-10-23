const { getAllLaunches, createLaunch } = require("../../models/launches.model");

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpCreateLaunch(req, res) {
    const launch = req.body;
    const { mission, rocket, launchDate, target } = launch;
    const isMissingRequiredFields = !mission || !rocket || !launchDate || !target;

    if (isMissingRequiredFields) {
        return res.status(400).json({ message: "Missing required launch property" });
    }

    if (isNaN(launchDate)) {
        return res.status(400).json({ message: "Invalid launch date" });
    }

    launch.launchDate = new Date(launch.launchDate);
    createLaunch(launch);

    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpCreateLaunch
}
