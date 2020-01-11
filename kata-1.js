let sumLargestNumbers = function(data) {
  let sum = 0;
  let largestNum = 0;
  let secondLargestNum = 0;
  for (num of data) {
    if (num > largestNum) {
      secondLargestNum = largestNum;
      largestNum = num;
    } else if (num > secondLargestNum) {
      secondLargestNum = num;
    }
  }
  sum = largestNum + secondLargestNum;
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));