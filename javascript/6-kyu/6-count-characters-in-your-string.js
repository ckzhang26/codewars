function count (string) {  
    const chars = {};
    
    for (let char of string) {
      chars[char] = chars[char] ? ++chars[char] : 1;
    }
    
    return chars;
  }