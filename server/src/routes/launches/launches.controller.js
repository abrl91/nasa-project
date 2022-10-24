const { getAllLaunches, createLaunch, existsLaunchWithId, abortLaunch } = require("../../models/launches.model");

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

function httpAbortLaunchLaunch(req, res) {
    const launchId = req.params.id;

    if (!existsLaunchWithId(launchId)) {
        return res.status(404).json({ message: "launch not found" });
    }
    
    const abortedLaunch = abortLaunch(launchId);
    return res.status(200).json(abortedLaunch);

}

module.exports = {
    httpGetAllLaunches,
    httpCreateLaunch,
    httpAbortLaunchLaunch,
}
