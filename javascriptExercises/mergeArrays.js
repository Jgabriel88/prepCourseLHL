function merge(x, y) {
  for (let i = 0; i < y.length; i++) {
    x.push(y[i]);
  } return x.sort()
}

console.log(merge([1, 55, 33], [44, 77, 2]))
