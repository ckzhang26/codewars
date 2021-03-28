snail = function(array) {
    if (array.length === 1) {
      return array[0];
    } 
    else {
      const newArr = array.slice(1);
      return array[0].concat(snail(newArr[0].map((_, colIndex, arr) => newArr.map(row => row[arr.length - 1 -colIndex]))));
    }
  }
  
  // [1, 2, 3],
  // [4, 5, 6],
  // [7, 8, 9]
  
  // [6, 9],
  // [5, 8],
  // [4, 7]
  
  // [8, 7],
  // [5, 4]
  
  // [4, 5]