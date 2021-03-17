function sumTriangularNumbers(n) {
    const result = [0];
    
    for (let i = 1; i <= n; i++) {
      result.push(result[result.length - 1] + i);
    }
    
    return result.reduce((a, b) => a + b, 0);
  }