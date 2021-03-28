function zeros (n) {
    if (n === 0) return 0;
    
    const kmax = Math.floor(Math.log10(n) / Math.log10(5));
    return Array.from(Array(kmax), (val, i) => Math.floor(n / (5 ** (i + 1)))).reduce((a, b) => a + b, 0);
  }