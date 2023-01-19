function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
    // Only change code above this line
  }
}

testSize(7);

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (par - strokes == 0) {
    return names[3];
  } else if (par - strokes <= -3) {
    return names[6];
  } else if (par - strokes <= -2) {
    return names[5];
  } else if (par - strokes <= -1) {
    return names[4];
  }
  // Only change code above this line
  else if (par - strokes >= 2) {
    return names[1];
  } else if (par - strokes >= 1) {
    return names[2];
  }
}

console.log(golfScore(5, 5));
