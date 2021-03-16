function narcissistic(value) {
    const str= value.toString();
    const numDigits = str.length;
    const sum = str.split('').reduce((a, b) => a + Math.pow(+b, numDigits), 0);
    
    return sum === value;
  }
  