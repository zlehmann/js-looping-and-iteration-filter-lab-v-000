// Code your solution in this file
function findMatching(drivers, str) {
  const newDrivers = drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
  return newDrivers;
}