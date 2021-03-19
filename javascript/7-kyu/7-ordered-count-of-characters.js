var orderedCount = function (text) {
    const chars = [];
    const seen = [];
    
    for (let char of text) {
      if (!seen.includes(char)) {
        seen.push(char);
        const count = text.split('').filter(x => x === char).length;
        chars.push([char, count]);
      }
    }
    
    return chars;
  }