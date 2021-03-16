function high(x){
    let result = '';
    let highScore = 0;
    const strings = x.split(' ');
    
    for (let string of strings) {
      const score = string.split('').map(char => char.charCodeAt(0) - 96).reduce((a, b) => a + b);
      if (score > highScore) {
        highScore = score;
        result = string;
      }
    }
    
    return result;
  }