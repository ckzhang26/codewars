function firstNonRepeatingLetter(s) {
    return s.split('')
      .find(char => s.toLowerCase().indexOf(char.toLowerCase()) === s.toLowerCase().lastIndexOf(char.toLowerCase())) || '';
  }