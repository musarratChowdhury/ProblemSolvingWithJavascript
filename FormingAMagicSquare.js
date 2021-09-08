s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];
magic_squares = [
  [8, 1, 6, 3, 5, 7, 4, 9, 2],
  [6, 1, 8, 7, 5, 3, 2, 9, 4],
  [4, 9, 2, 3, 5, 7, 8, 1, 6],
  [2, 9, 4, 7, 5, 3, 6, 1, 8],
  [8, 3, 4, 1, 5, 9, 6, 7, 2],
  [4, 3, 8, 9, 5, 1, 2, 7, 6],
  [6, 7, 2, 1, 5, 9, 8, 3, 4],
  [2, 7, 6, 9, 5, 1, 4, 3, 8],
];

flattenedArray = s.flatMap((x) => x);
allDifferences = [];
minimumCost = 0;
magic_squares.forEach((subarray) => {
  allDifferences.push(differenceCount(subarray, flattenedArray));
});
allDifferences.sort((a, b) => a - b);
minimumCost = allDifferences[0];

function differenceCount(arr1, arr2) {
  totalDiff = 0;
  arr1.forEach((a, i) => {
    arr2.forEach((b, j) => {
      if (i === j) totalDiff += Math.abs(a - b);
    });
  });
  return totalDiff;
}
