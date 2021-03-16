function digital_root(n) {
    const digits = n.toString().split('').map(num => Number(num));
    return digits.length > 1 ? digital_root(digits.reduce((a, b) => a + b)) : digits[0];
  }