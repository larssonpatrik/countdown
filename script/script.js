var deadline = 10;

var timer = setInterval(clock, 1000);

function clock() {
  deadline--;

  if (deadline < 1) {
    document.getElementById("js--clock").innerHTML = "u dieded.";
  } else {
    document.getElementById("js--clock").innerHTML = printTime(deadline);
  }
}

function printTime(time) {
  return formatTime(getHours(time)) +
   ":" + formatTime(getMinutes(time)) + ":" + formatTime(getSeconds(time));
}

/*
  Converts seconds to hours.
*/
function getHours(s) {
  var hours = s / 3600;

  if (hours < 1) {
    return 0;
  }

  return Math.floor(hours);
}

/*
  Converts seconds to minutes.
*/
function getMinutes(s) {
  var hours = getHours(s);
  var minutes = s / 60;
  var result = minutes - (hours * 60);

  return Math.floor(result);
}

/*
  Converts total seconds
*/
function getSeconds(s) {
  var hours = getHours(s); // gives value 1
  var minutes = getMinutes(s); // gives value 30
  var seconds = (getHours(s) * 3600) + (getMinutes(s) * 60);
  var result = s - seconds;

  return Math.floor(result);
}

function formatTime(nr) {
  if (nr < 10) {
    return "0" + nr;
  }

  return nr;
}
