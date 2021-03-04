function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions('happy', function (num) {

  var laughTimes = ""
  for (var i = 0; i < num; i++) {

    laughTimes += "ha"
  }
  laughTimes = laughTimes + "!";
  return laughTimes;
})

console.log(laugh(1));

