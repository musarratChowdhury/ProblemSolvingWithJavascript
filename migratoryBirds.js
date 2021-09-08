let testarr = [2, 4, 3, 2, 3, 1, 2, 1, 3, 3, 2];

function migratoryBirds(arr) {
  let result;

  let counterArr = [
    { type: 1, count: 0 }, //index = 0;
    { type: 2, count: 0 }, //index = 1;
    { type: 3, count: 0 },
    { type: 4, count: 0 }, //index = 3;
    { type: 5, count: 0 }, //index = 4;
  ];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case 1:
        counterArr[arr[i] - 1].count++;
        break;
      case 2:
        counterArr[arr[i] - 1].count++;
        break;
      case 3:
        counterArr[arr[i] - 1].count++;
        break;
      case 4:
        counterArr[arr[i] - 1].count++;
        break;
      case 5:
        counterArr[arr[i] - 1].count++;
        break;
    }
  }
  console.log(counterArr);
  //lets sort the array form small to large
  let sortedArr = counterArr.sort((a, b) => {
    return a.count - b.count;
  });
  //finding the maximum number of sightings
  console.log(sortedArr);
  let maxCount = sortedArr[sortedArr.length - 1].count;
  //filetered out the types with maxinum counts
  let maxcountedArr = sortedArr.filter((x) => {
    if (x.count == maxCount) {
      return x;
    }
  });
  console.log(maxcountedArr);

  if (maxcountedArr.length == 1) {
    result = maxcountedArr[0].type;
  } else {
    let lowerType = maxcountedArr.sort((a, b) => {
      return a.type - b.type;
    });
    // console.log(lowerType);
    result = lowerType[0].type;
  }

  return result;
}

console.log(migratoryBirds(testarr));
