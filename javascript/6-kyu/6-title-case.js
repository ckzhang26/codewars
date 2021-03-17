function titleCase(title, minorWords) {
    if (!title) return title;  
    const words = title.split(' ').map(word => word.toLowerCase());
    const exps = (minorWords || '').split(' ').map(exp => exp.toLowerCase());
  
    for (let i = 0; i < words.length; i++) {
      if (i === 0 || !exps.some(exp => exp === words[i])) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      }else {
        words[i] = words[i].toLowerCase();
      }
    }
    
    return words.join(' ');
  }
  