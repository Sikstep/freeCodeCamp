"use strict";
var myName;

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer += "alpha";
      break;
    case 2:
      answer += "beta";
      break;
    case 3:
      answer += "gamma";
      break;
    case 4:
      answer += "delta";
      break;
  }

  // Only change code above this line
  return answer;
}

caseInSwitch(1);
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer += "apple";
      break;
    case "b":
      answer += "bird";
      break;
    case "c":
      answer += "cat";
      break;
    default:
      answer += "stuff";
      break;
  }

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer += "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer += "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer += "High";
      break;
  }

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer += "Marley";
      break;
    case 42:
      answer += "The Answer";
      break;
    case 1:
      answer += "There is no #1";
      break;
    case 99:
      answer += "Missed me by this much!";
      break;
    case 7:
      answer += "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

function isLess(a, b) {
  // Only change code below this line

  // Only change code above this line
  return a < b;
}

isLess(10, 15);

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  // Only change code above this line
  if (count <= 0) {
    return `${count} Hold`;
  } else {
    return `${count} Bet`;
  }
}
console.log(cc(2));
cc(2);
cc(3);
cc(7);
cc("K");
console.log(cc("A"));

const myDog = {
  // Only change code below this line
  name: "Guff",
  legs: 4,
  tails: 1,
  friends: ["Water", "AnotherDogs"],

  // Only change code above this line
};

// Setup
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

// Only change code below this line
const hatValue = testObj.hat; // Change this line
const shirtValue = testObj.shirt;
