function stockList(listOfArt, listOfCat){
    if (listOfArt.length === 0 || listOfCat.length === 0) return '';
    
    const counts = {};
    const result = [];
    
    for (let cat of listOfCat) {
      counts[cat] = 0;
    }
    
    for (let book of listOfArt) {
      const cat = book[0];
      if (listOfCat.includes(cat)) {
        counts[cat] += +book.split(' ')[1];;
      }
    }
    
    for (let key in counts) {
      result.push(`(${key} : ${counts[key]})`);
    }
    
    return result.join(' - ');
  }