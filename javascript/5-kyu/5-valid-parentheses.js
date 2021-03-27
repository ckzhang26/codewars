function validParentheses(parens){
    const stack = [];
    
    for (let char of parens) {
      if (char === '(') stack.push(char);
      else if (!stack.pop()) return false; 
    }
    
    return stack.length === 0;
  }