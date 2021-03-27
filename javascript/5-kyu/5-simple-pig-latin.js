function pigIt(str){
    const firstLetters = str.split(' ').map(word => word[0]);
    
    return str.split(' ')
          .map((word, i) => {
              return /\w/.test(word) ? word.replace(/^\w/g, '') + firstLetters[i] + 'ay' : word;
          }).join(' ');
  }