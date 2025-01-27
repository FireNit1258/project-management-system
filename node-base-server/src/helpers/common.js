const DeviceDetector = require('node-device-detector');
const generatedNumbers = new Set(); // To store unique numbers

function generateUniqueRandomNumber() {
  let uniqueNumber;

  do {
    uniqueNumber = Math.floor(Math.random() * 1000000); // Change the range as needed
  } while (generatedNumbers.has(uniqueNumber));

  generatedNumbers.add(uniqueNumber);
  return uniqueNumber;
}

function getExpirytime(minutes = 15) {
    const currentTime = new Date(); // Get current time
    if(minutes !== 0) {
        currentTime.setMinutes(currentTime.getMinutes() + minutes); // Add 15 minutes to the current time
    }
    return Math.floor(currentTime.getTime() / 1000);
}
function getDeviceDetails(userAgent) {
const detector = new DeviceDetector({
    clientIndexes: true,
    deviceIndexes: true,
    deviceAliasCode: false,
    deviceTrusted: false,
    deviceInfo: true,
    maxUserAgentSize: 500,
  });
  const result = detector.detect(userAgent);
  return result;
}


module.exports = {
    generateUniqueRandomNumber,getExpirytime,getDeviceDetails
};