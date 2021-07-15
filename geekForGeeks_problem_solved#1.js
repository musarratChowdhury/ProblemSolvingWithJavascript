//Link : https://practice.geeksforgeeks.org/problems/minimum-distance-between-two-numbers/1/?company[]=Amazon&company[]=Amazon&problemType=functional&difficulty[]=-1&page=1&sortBy=submissions&query=company[]AmazonproblemTypefunctionaldifficulty[]-1page1sortBysubmissionscompany[]Amazon#

// Minimum distance between two numbers
// Basic Accuracy: 38.9% Submissions: 61911 Points: 1
// You are given an array A, of N elements. Find minimum index based distance between two elements of the array, x and y.

// Example 1:

// Input:
// N = 4
// A[] = {1,2,3,2}
// x = 1, y = 2
// Output: 1
// Explanation: x = 1 and y = 2. There are
// two distances between x and y, which are
// 1 and 3 out of which the least is 1.
// Example 2:

// Input:
// N = 7
// A[] = {86,39,90,67,84,66,62}
// x = 42, y = 12
// Output: -1
// Explanation: x = 42 and y = 12. We return
// -1 as x and y don't exist in the array.

let a = [
  96, 82, 48, 76, 34, 19, 7, 80, 36, 57, 77, 34, 19, 35, 5, 57, 16, 66, 42, 62,
  89, 19, 60, 19, 25, 16, 20, 51, 77, 75, 12, 73, 8, 11, 100, 93, 81, 58, 72,
  17, 14, 48, 2, 33, 82, 6, 41, 49, 72, 34, 10, 12, 53, 21, 30, 77, 36, 49, 79,
  13, 75, 42,
];
let x = 36;
let y = 33;

let indexOfX = [];
let indexOfY = [];
let distances = [];
let minmDistance = 0;

a.forEach((a, i) => {
  //int i =i ,arr[i] = a

  if (a == x) indexOfX.push(i);
  if (a == y) indexOfY.push(i);
});

console.log(indexOfX, indexOfY);

indexOfX.forEach((posX) => {
  //int i =0;i++
  indexOfY.forEach((posY) => {
    //int j =0;j++
    distances.push(Math.abs(posX - posY));
  });
});

distances.sort((a, b) => a - b);
minmDistance = distances[0];
if (!minmDistance) minmDistance = -1;

console.log(minmDistance);
return minmDistance;
