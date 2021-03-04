let binCategory = {
  waste: 4,
  recycling: 2,
  compost: 5
}
function smartGarbage(trash, bins) {
  if (binCategory.waste) {
    binCategory.waste++
    return binCategory.waste

  }
  else if (binCategory.recycling) {
    binCategory.recycling++
    return binCategory.recycling

  }
  else if (binCategory.compost) {
    binCategory.compost++
    return binCategory.compost
  }
}