// Ref: https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds
function parseTime(timeInSecs) {
  const minutes = Math.floor(timeInSecs / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSecs % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function getDeviceType() {
  const queryParams = window.location.search;
  const urlParams = new URLSearchParams(queryParams);
  return urlParams.get("deviceType");
}
