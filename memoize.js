function factorialN(n) {
  if (n <= 1) return 1;
  return factorialN(n - 1) * n;
}
// console.log(factorialN(5));

function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }

    cache[key] = fn.apply(this, args);
    return cache[key];
  };
}

let test = memoize((a, b) => a + b);

test(2, 2);
test(2, 2);
test(2, 3);
