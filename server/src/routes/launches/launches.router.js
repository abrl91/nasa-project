const express = require("express");
const { httpGetAllLaunches, httpCreateLaunch, httpAbortLaunchLaunch } = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get('', httpGetAllLaunches);
launchesRouter.post('', httpCreateLaunch);
launchesRouter.delete('/:id', httpAbortLaunchLaunch);

module.exports = launchesRouter;
