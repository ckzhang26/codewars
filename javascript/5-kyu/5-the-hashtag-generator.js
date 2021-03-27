function generateHashtag (str) {
    let hashtag = str.trim().replace(/\s+/g, ' ');
    if (!hashtag) return false;
    
    hashtag = '#' + hashtag
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('');
    
    return hashtag.length > 140 ? false : hashtag;
  }