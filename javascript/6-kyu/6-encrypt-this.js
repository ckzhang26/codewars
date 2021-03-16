var encryptThis = function(text) {
    return text.split(' ').map(word => {
      const first = word.charCodeAt(0);
      const second = word[1];
      const last = word[word.length - 1];
      const middle = word.slice(2, word.length - 1);
      
      if (word.length === 1) return first;
      if (word.length === 2) return first + last;
      return first + last + middle + second;
    }).join(' ');
  }