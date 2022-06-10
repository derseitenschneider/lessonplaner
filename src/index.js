"use strict";

// Available hours teacher

const teacher = {
  start: 12,
  end: 18,
};

// Available hours students

const student1 = {
  lessonDuration: 4 / 6,
  option1: {
    start: 12,
    end: 15,
  },
};
const student2 = {
  lessonDuration: 0.5,
  option1: {
    start: 13,
    end: 14,
  },
};
const student3 = {
  lessonDuration: 0.5,
  option1: {
    start: 12,
    end: 19,
  },
};

const slotsArr = [];
let start = teacher.start;

for (let i = 0; i < (teacher.end - teacher.start) * 6; i++) {
  slotsArr.push(Number(start.toFixed(2)));
  start += 1 / 6;
}

console.table(slotsArr);
