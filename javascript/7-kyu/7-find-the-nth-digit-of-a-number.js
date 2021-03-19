var findDigit = function(num, nth){
    if (nth < 1) return -1;
    const digits = Math.abs(num).toString().split('').reverse();
    if (nth > digits.length) return 0;
    return +digits[nth - 1];
  }