function forLoop(array) {
  for(i = 0; i < 25; i++) {
    array.unshift(`I am ${i} strange loops.`)
  }
  return array;
}

function whileLoop(n) {
  while(n > 0) {
    console.log(--n);
    if(n === 0) {
      return 'done';
    }
  }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
    do {
      array.shift();
    } while (maybeTrue() === false && array.length === 0);

    return array;
}
