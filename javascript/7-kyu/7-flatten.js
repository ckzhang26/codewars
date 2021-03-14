var flatten = function (array){
    return array.reduce((a, b) => a.concat(b), []);
  }