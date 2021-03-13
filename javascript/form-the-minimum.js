function minValue(values){
    let result = '';
    const sorted = [...values].sort((a, b) => a - b);
    
    for (let i = 0; i < sorted.length; i++) {
      if (!result.includes(sorted[i])) {
        result += sorted[i];
      }
    }
    
    return +result;
  }