var askName = prompt("What is your name?");
var askName2 = prompt("What is your crush's name?");
var n = Math.random();
var result = Math.floor(n * 100) + 1;
if (result > 70) {
  alert(
    askName +
      " and " +
      askName2 +
      "'s compatibility is " +
      result +
      "% you are compatible"
  );
}

if (result > 30 && result <= 70) {
  alert(askName + " and " + askName2 + "'s compatibility is " + result + "%");
}

if (result <= 30) {
  alert(
    askName +
      " and " +
      askName2 +
      "'s compatibility is " +
      result +
      "% di kayo bagay"
  );
} else {
  alert(askName + " and " + askName2 + "'s compatibility is " + result + "%");
}
