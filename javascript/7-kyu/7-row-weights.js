function rowWeights(array){
    const result = [0, 0];
    
    for (let i = 0; i < array.length; i++) {
      i % 2 === 0 ? result[0] += array[i] : result[1] += array[i];
    }
    
    return result;
  }