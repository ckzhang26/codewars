function cakes(recipe, available) {
    let cakes = 0;
    
    while (enough(recipe, available)) {
      for (let key in available) {
        available[key] -= recipe[key];
      }
      cakes++;
    }
    
    return cakes;
  }
  
  function enough(recipe, available) {
    for (let key in recipe) {
      if (available[key] < recipe[key] || !available[key]) return false;
    }
    
    return true;
  }