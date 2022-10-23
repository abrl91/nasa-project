const launches = new Map();
let latestFlightNumber = "100";

const exampleLaunch = {
    flightNumber: latestFlightNumber,
    mission: "Kepler Exploration X",
    rocket: "Explore IS1",
    launchDate: new Date('December 27, 2030'),
    target: "Kapler-442 b",
    upcoming: true,
    success: null,
  };

  launches.set(exampleLaunch.flightNumber, exampleLaunch);

  function getAllLaunches() {
    return Array.from(launches.values());
  }

  function createLaunch(launch) {
    latestFlightNumber++
    launches.set(
      latestFlightNumber, 
      Object.assign(launch, {
        flightNumber: latestFlightNumber,
        upcoming: true,
        success: true,
        customers: ["Amit", "NASA"]
      })
    );
  }

  module.exports = {
    getAllLaunches,
    createLaunch
  }
  