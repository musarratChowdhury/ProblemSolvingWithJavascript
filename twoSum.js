// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const testArr = [2, 7, 11, 15];
const target = 9;

let trackerObj = [];
let result = [];

for (let i = 0; i < testArr.length; i++) {
  if (trackerObj[target - testArr[i]]) {
    result = [trackerObj[target - testArr[i]].index, i];
    break;
  } else {
    trackerObj[testArr[i]] = { index: i };
  }
}

console.log(result);

//using L & R
//in a sorted array

var twoSum = function (numbers, target) {
  let L = 0,
    R = numbers.length - 1;
  let result = [];

  while (L < R) {
    let current_sum = numbers[L] + numbers[R];
    if (current_sum == target) {
      return (result = [L, R]);
    } else if (current_sum < target) {
      L++;
    } else {
      R--;
    }
  }

  return result;
};
console.log(twoSum(testArr, target));
