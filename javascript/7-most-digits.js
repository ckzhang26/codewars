function findLongest(array){
    return array.reduce((a, b) => b.toString().length > a.toString().length ? b : a);
  }