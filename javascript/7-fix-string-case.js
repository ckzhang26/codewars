function solve(s){
    const numUppercase = (s.match(/[A-Z]/g) || []).length;
    const numLowercase = (s.match(/[a-z]/g) || []).length;
    
    return numUppercase > numLowercase ? s.toUpperCase() : s.toLowerCase();
  }