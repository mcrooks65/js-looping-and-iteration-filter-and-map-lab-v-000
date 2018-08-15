// Code your solution here:
function driversWithRevenueOver(driver, revenue) { // This function takes an array of driver JavaScript objects as the first argument and a string called revenue as the second argument. It returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument.
  return driver.filter(function (driver) {
    return driver.revenue > revenue;
  });
} 

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(function (driver) {
      return driver.name;
    });
}
