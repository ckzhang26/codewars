function f(n){
    if (typeof n !== 'number' || parseInt(n) !== n || n < 1) return false;
    return (n * (n + 1)) / 2;
  };