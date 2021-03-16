decodeMorse = function(morseCode){
    const result = [];
    const words = morseCode.trim().split('   ');
    for (let word of words) {
      const chars = word.split(' ').map(char => MORSE_CODE[char]).join('');
      result.push(chars);
    }
    
    return result.join(' ');
  }