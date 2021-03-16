var countBits = function(n) {
    return n.toString(2)
      .split('')
      .reduce((a, b) => {
        return b === '1' ? a + 1 : a;    
      }, 0);
  };