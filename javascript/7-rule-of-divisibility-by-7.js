function seven(m) {
    let str = m.toString();
    let firstNums = str.slice(0, str.length - 1);
    let lastNum = 2 * +str[str.length - 1];
    let result = +firstNums - +lastNum;
    let steps = str.length > 1 ? 1 : 0;
    
    while(result.toString().length > 2) {
      steps++;
      str = result.toString();
      firstNums = str.slice(0, str.length - 1);
      lastNum = 2 * +str[str.length - 1];
      result = +firstNums - +lastNum;
    }
    
    return [result, steps];
  }