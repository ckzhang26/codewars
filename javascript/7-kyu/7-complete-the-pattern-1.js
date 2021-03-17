function pattern(n){
    if (n < 1) return '';
    return Array.from(Array(n), (val, i) => (i + 1).toString().repeat(i + 1)).join('\n');
  }