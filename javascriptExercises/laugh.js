var laughTimes = ""
var laugh = function (num) {

  for (var i = 0; i < num; i++) {

    laughTimes += "ha"
  }
  laughTimes = laughTimes + "!"
  return laughTimes
}

console.log(laugh(1));
