let result = n;
for (let i = 1; i < n; i++) {
  result *= n - i;
}

let answer = result.toPrecision(100);
console.log(answer);
return answer;
