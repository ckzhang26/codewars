function validBraces(braces){
    const openings = ['(', '[', '{'];
    const closings = [')', ']', '}'];
    
    for (let i = 0; i < braces.length; i++) {
      const char = braces[i];
      let matchIndex;
      let type;
      if (openings.includes(char)) {
        matchIndex = openings.indexOf(char);
        type = 'opening';
      }else {
        matchIndex = closings.indexOf(char);
        type = 'closing';
      }
      if (type === 'opening') {
        let matched = false;
        for (let j = i + 1; j < braces.length; j++) {
          if (braces[j] === closings[matchIndex] && (j - i) % 2 === 1) {
            matched = true;
          }
        }
        if (!matched) return false;
      }
      if (type === 'closing') {
        let matched = false;
        for (let j = i - 1; j >= 0; j--) {
          if (braces[j] === openings[matchIndex] && Math.abs(j - i) % 2 === 1) {
            matched = true;
          }
        }
        if (!matched) return false;
      }
    }
    
    return true;
  }