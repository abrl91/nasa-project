const BASE_API_URL = "http://localhost:8000";

async function httpGetPlanets() {
  const response = await fetch(`${BASE_API_URL}/planets`);
  return response.json();
}

async function httpGetLaunches() {
  const response = await fetch(`${BASE_API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => a - b);
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};