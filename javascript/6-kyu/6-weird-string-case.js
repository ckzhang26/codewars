function toWeirdCase(string){
    const result = [];
    const words = string.split(' ');
    
    for (let word of words) {
      let weird = '';
      for (let i = 0; i < word.length; i++) {
        weird += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
      }
      result.push(weird);
    }
    
    return result.join(' ');
  }