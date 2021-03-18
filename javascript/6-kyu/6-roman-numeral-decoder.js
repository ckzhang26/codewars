function solution(roman){
    const values = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    
    let integer = roman.split('').map(char => values[char]).reduce((a, b) => a + b, 0);
  
    for (let i = 0; i < (roman.match(/(IV)|(IX)/g) || []).length; i++) {
      integer -= 2;
    }
    
    return integer;
  }