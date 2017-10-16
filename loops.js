function forLoop(array) {
  for(i = 0; i < 25; i++) {
    array.unshift(`I am ${i} strange loops.`)
  }
  return array;
}

function whileLoop(n) {
  while(n > 0) {
    n = n - 1;
    if(n === 0) {
      return 'done';
    }
  }
}
