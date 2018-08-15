// Code your solution here:
function driversWithRevenueOver(driver, revenue) {
  return driver.filter(function (driver) {
    return driver.revenue > revenue;
  });
}

function driverNameWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
  .map(function (driver) {
    return driver.name;
  });
}
