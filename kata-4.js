const instructorWithLongestName = function(instructors) {
  let longestName = {};
  let nameLength = 0;
  for (instructor of instructors) {
    if (instructor.name.length > nameLength) {
      nameLength = instructor.name.length;
      longestName = instructor;
    }
  }
  return longestName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));