function forLoop(array) {
  for(i = 0; i <= 25; i++) {
    array.unshift(`I am ${i} strange loops.`)
  }
  return array;
}
