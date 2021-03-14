var gimme = function (inputArray) {
    const sorted = [...inputArray].sort((a, b) => a - b);
    return inputArray.indexOf(sorted[1]);
  };