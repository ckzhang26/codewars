function addLetters(...letters) {
    if (letters.length < 1) return 'z';
    let total = 96;
    
    for (let letter of letters) {
      total += letter.charCodeAt(0) - 96;
    }
    
    while (total > 122) {
      total -= 26;
    }
    
    return String.fromCharCode(total);
  }