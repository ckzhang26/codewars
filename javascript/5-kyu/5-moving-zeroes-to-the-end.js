var moveZeros = function (arr) {
    const zeroes = [];
    const nonzeroes = [];
    
    for (let i = 0; i < arr.length; i++) {
      arr[i] === 0 ? zeroes.push(arr[i]) : nonzeroes.push(arr[i]);
    }
    
    return nonzeroes.concat(zeroes);
  }