let test = [1, 3, 3, 4, 5, 6];
let test2 = [
  66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
  66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
  66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
  66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
  66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66,
  66, 66, 66, 66, 66,
];

//console.log(test2.length);
function pickingNumbers(a) {
  // Write your code here
  let b = a.sort((a, b) => a - b);

  let start = 0;
  let count = 1;

  let lengths = [];
  // let collection = [];
  for (let i = 1; i < b.length; i++) {
    let diff = Math.abs(b[i] - b[start]);

    if (diff > 1) {
      lengths.push(count);
      count = 1;
      start = i;
    } else if (diff <= 1) {
      count++;
      lengths.push(count);
    }
    console.log(count);
  }

  let result = lengths.reduce((a, b) => Math.max(a, b));

  console.log(result);
  return result;
}

pickingNumbers(test);
