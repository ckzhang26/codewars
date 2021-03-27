function rgb(...args){
    let result = '';
    
    for (let i = 0; i < args.length; i++) {
      if (args[i] < 0) args[i] = 0;
      if (args[i] > 255) args[i] = 255;
      result += args[i].toString(16).padStart(2, 0).toUpperCase();
    }
    
    return result;
  }