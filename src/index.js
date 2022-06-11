"use strict";

// Available hours teacher

const teacher = {
  start: 12,
  end: 18,
};

// Available hours students

const eliel = {
  lessonDuration: 4 / 6,
  option1: {
    start: 12,
    end: 15,
  },
};
const sandra = {
  lessonDuration: 0.5,
  option1: {
    start: 13,
    end: 14,
  },
};
const simona = {
  lessonDuration: 0.5,
  option1: {
    start: 12,
    end: 19,
  },
};

const slotsArr = {};
let start = teacher.start;

for (let i = 0; i < (teacher.end - teacher.start) * 12; i++) {
  //Push rounded starting number in array
  // slotsArr.push(Number(start.toFixed(2)));
  slotsArr[start.toFixed(2)] = undefined;
  start += 1 / 12;
}

// console.table(Object.keys(slotsArr));

// ABSTRACT
// Color blocks (number = size)
const red = 3;
const blue = 2;
const green = 4;

// Emtpy Object
const clrObj = {};
let startObj = 0;

//Creating object whit numbered keys
for (let i = 0; i < 20; i++) {
  clrObj[startObj] = undefined;
  startObj++;
}

//Dynamic condition based on color block size

//Random Data put in object
clrObj[0] = false;

clrObj[3] = false;
clrObj[6] = false;
//Looping through colors

let isRedSet = false;
for (let i = 0; i < Object.keys(clrObj).length; i++) {
  if (
    clrObj[i] === undefined &&
    clrObj[i + 1] === undefined &&
    clrObj[i + 2] === undefined
  ) {
    if (!isRedSet) {
      clrObj[i] = clrObj[i + 1] = clrObj[i + 2] = "red";
      isRedSet = true;
    }
  }
}

let isBlueSet = false;
for (let i = 0; i < Object.keys(clrObj).length; i++) {
  if (clrObj[i] === undefined && clrObj[i + 1] === undefined) {
    if (!isBlueSet) {
      clrObj[i] = clrObj[i + 1] = "blue";
      isBlueSet = true;
    }
  }
}

// let countBlue = blue;
// for (let i = 0; i < Object.keys(clrObj).length; i++) {
//   if (clrObj[i] === undefined && clrObj[i + 1] === undefined) {
//     if (countBlue > 0) {
//       clrObj[i] = "blue";
//       countBlue--;
//     }
//   }
// }

// let countGreen = green;
// for (let i = 0; i < Object.keys(clrObj).length; i++) {
//   if (clrObj[i] === undefined) {
//     if (countGreen > 0) {
//       clrObj[i] = "green";
//       countGreen--;
//     }
//   }
// }

console.table(clrObj);
