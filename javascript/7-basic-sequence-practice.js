function sumOfN(n) {
    const result = [0];
    let sum = 0;
    
    for (let i = 1; i <= Math.abs(n); i++) {
      sum = n > 0 ? sum + i : sum - i;
      result.push(sum);
    }
    
    return result;
  };