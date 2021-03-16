function sumDigPow(a, b) {
    const result = [];
    
    for (let i = a; i <= b; i++) {
      let power = 1;
      const sum = i.toString().split('').reduce((a, b) => a + Math.pow(+b, power++), 0);
      if (i === sum) result.push(i);
    }
    
    return result;
  }
  