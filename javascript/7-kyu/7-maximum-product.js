function adjacentElementsProduct(array) {
    let max = -Infinity;
    for (let i = 1; i < array.length; i++) {
      if (array[i] * array[i - 1] > max) max = array[i] * array[i - 1];
    } 
    
    return max;
  }