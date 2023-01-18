"use strict";
function functionWithArgs(param1, param2) {
  console.log(param1 + param2);
}
functionWithArgs(5, 2);

function timesFive(num) {
  return num * 5;
}

const answer = timesFive(5);
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}
// Only change code above this line
addThree();
addFive();

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
