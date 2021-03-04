function howManyHundreds(number) {
  let x = number;
  let y = number % 100;
  let z = x - y;
  return z / 100;
}