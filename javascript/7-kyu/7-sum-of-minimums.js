function sumOfMinimums(arr) {
    return arr.map(subarr => Math.min(...subarr)).reduce((a, b) => a + b);
  }