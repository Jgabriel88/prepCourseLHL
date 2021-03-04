
const whichSchool = function (age) {
  //cheking age
  if (age < 13) {
    return 'Elementary School';
  }
  //cheking age
  else if (age >= 13 && age <= 18) {
    return 'Secondary School';

  } else {
    return 'Lighthouse Labs';

  }
}
