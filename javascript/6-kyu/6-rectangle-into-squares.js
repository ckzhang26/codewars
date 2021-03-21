function sqInRect(lng, wdth){
    if (lng === wdth) return null;
    
    const result = [];
    
    while (lng !== wdth) {
      if (lng > wdth) {
        result.push(wdth);
        lng -= wdth;
      }else {
        result.push(lng);
        wdth -= lng;
      }
    }
    
    result.push(lng);
    return result;
  }