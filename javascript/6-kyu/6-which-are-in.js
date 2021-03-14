function inArray(array1,array2){
    return array1.filter(sub => {
      return array2.some(str => str.includes(sub));
    }).sort();
  }