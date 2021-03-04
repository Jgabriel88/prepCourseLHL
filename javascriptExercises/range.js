function range(start, end, step) {
  let ranger = []
  if (start === undefined || end === undefined || step === undefined) {
    return ranger
  }
  else if (start > end) {
    return ranger
  } else if (step <= 0) {
    return ranger
  }

  else {
    for (let result = start; result <= end; result += step) {
      ranger.push(result)
    }
  }
  return ranger
}