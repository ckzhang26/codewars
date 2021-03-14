var palindromeChainLength = function(n) {
    let steps = 0;
    let orig = n;
    let test = orig.toString().split('').reverse().join('');
    
    while (orig != test) {
      orig += +test;
      test = orig.toString().split('').reverse().join('');
      steps++;
    }
    
    return steps;
  };