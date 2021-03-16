function partlist(arr) {
    const result = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
      const strings = [];
      strings.push(arr.slice(0, i+ 1).join(' '));
      strings.push(arr.slice(i + 1).join(' '));
      result.push(strings);
    }
    
    return result;
  }