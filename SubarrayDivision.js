let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
let d = 18;
let m = 7;

function birthday(s, d, m) {
  // Write your code here
  let counter = 0;
  let sum = 0;

  if (s.length == 1 && s[0] == d) {
    return (counter = 1);
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < m + i; j++) {
      sum += s[j];
    }

    if (sum == d) {
      counter++;
    }
    sum = 0;
  }

  console.log(counter);
  return counter;
}

//
birthday(s, d, m);
