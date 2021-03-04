function lastIndexOf(theArray, theValue) {
  let isPresent = false;
  let index;
  for (let i = theArray.length - 1; i >= 0; i--) {
    if (theArray[i] === theValue) {
      index = i;
      isPresent = true;
      break
    }
  }

  if (index >= 0) {
    return index;
  } else {
    return -1;
  }
}