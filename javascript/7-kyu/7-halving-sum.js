function halvingSum(n) {
    let sum = 0;
    
    while (n >= 1) {
      sum += n;
      n = Math.trunc(n / 2);
    }
    
    return sum;
  }
  