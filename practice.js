let array_of_grades = [34, 38, 44, 68, 99, 77];
//47 =>50 difference =3;
//passing grade 40;

function gradingStudents(grades) {
  // Write your code here
  let result_arr = [];

  grades.forEach((grade) => {
    if (grade < 38) {
      result_arr.push(grade);
    } else {
      //next multiple of 5 from 44;//45
      let nextMultipleOf5 = getTheNextMultilple(grade); //100
      let difference = Math.abs(nextMultipleOf5 - grade); //1
      difference < 3
        ? result_arr.push(nextMultipleOf5)
        : result_arr.push(grade);
    }
  });

  return result_arr;
}
function getTheNextMultilple(n) {
  //divide by 5
  let multiple = (Math.floor(n / 5) + 1) * 5;
  return multiple;
}

console.log(gradingStudents(array_of_grades));
