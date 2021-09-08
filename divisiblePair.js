let ar = [29, 97, 52, 86, 27, 89, 77, 19, 99, 96];
let k = 3;
let n = 6;
//
function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let result = [];
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      if (i != j) {
        if ((ar[i] + ar[j]) % k == 0) {
          result.push([i, j]);
        }
      }
    }
  }
  console.log(result);
  console.log(result.length);
  return result.length / 2;
}

//
divisibleSumPairs(n, k, ar);
