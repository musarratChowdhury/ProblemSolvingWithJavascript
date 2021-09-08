let testarr = [2, 4, 3, 2, 3, 1, 2, 1, 3, 3];

function migratoryBirds(arr) {
  // Write your code here
  let result;

  let birdType = [
    { type: 1, count: 0 },
    { type: 2, count: 0 },
    { type: 3, count: 0 },
    { type: 4, count: 0 },
    { type: 5, count: 0 },
  ];
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i] - 1;

    switch (index) {
      case 0:
        birdType[index].count++;
        break;
      case 1:
        birdType[index].count++;
        break;
      case 2:
        birdType[index].count++;
        break;
      case 3:
        birdType[index].count++;
        break;
      case 4:
        birdType[index].count++;
        break;
    }
    console.log(index);
    console.log(birdType[index]);
  }
  console.log(birdType);

  let sortedArr = birdType.sort((a, b) => a.count - b.count).reverse();
  //console.log(sortedArr);
  let maxCount = sortedArr[0].count;
  let onlyMaxCountedBirds = sortedArr.filter((x) => {
    if (x.count == maxCount) return x;
  });
  //console.log(onlyMaxCountedBirds);
  if (onlyMaxCountedBirds.length == 1) {
    result = sortedArr[0].type;
  } else {
    let lowerType = onlyMaxCountedBirds.sort((a, b) => a.type - b.type);
    console.log(lowerType[0]);
    result = lowerType[0].type;
  }

  return result;
}

console.log(migratoryBirds(testarr));
