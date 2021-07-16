//https://www.hackerrank.com/challenges/kangaroo/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign
//
//
// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location X1 and moves at a rate of V1 meters per jump.
// The second kangaroo starts at location X2 and moves at a rate of V2  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

//

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let p = (x2 - x1) / (v1 - v2);

  //console.log(p);
  if (p > 0 && p % Math.floor(p) == 0) {
    return "YES";
  } else {
    return "NO";
  }
}
let result = kangaroo(0, 3, 4, 2);
console.log(result);
