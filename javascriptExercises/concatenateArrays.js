function concat(x, y) {
  for (let i = 0; i < y.length; i++) {
    x.push(y[i]);
  } return x
}

console.log(concat([11, 22, 33], [44, 55, 66]))
