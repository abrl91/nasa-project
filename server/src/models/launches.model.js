const launches = new Map();

const launch = {
    flightNumber: "100",
    mission: "Kepler Exploration X",
    rocket: "Explore IS1",
    launchDate: new Date('December 27, 2030'),
    upcoming: true,
    success: null,
  };

  launches.set(launch.flightNumber, launch);

  function getAllLaunches() {
    return Array.from(launches.values());
  }

  module.exports = {
    getAllLaunches
  }
  