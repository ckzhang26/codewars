function diamond(n){
    if (n < 1 || n % 2 === 0) return null;
    let result = '';
    
    for (let i = 1; i <= n; i += 2) {
      result += ' '.repeat(Math.floor(n / 2) - Math.floor(i / 2)) + '*'.repeat(i) + '\n';
    }
    
    for (let i = n - 2; i >= 1; i -= 2) {
      result += ' '.repeat(Math.floor(n / 2) - Math.floor(i / 2)) + '*'.repeat(i) + '\n';
    }
    
    return result;
  }