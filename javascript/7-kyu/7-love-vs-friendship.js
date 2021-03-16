function wordsToMarks(string){
    return string.split('').map(char => char.charCodeAt(0) - 96).reduce((a, b) => a + b);
  }