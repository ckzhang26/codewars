function foldTo(distance) {
    if (distance < 0) return null;
    
    const thickness = .0001;
    let folds = 0;
    
    while (thickness * (2 ** folds) < distance) {
      folds++;
    }
    
    return folds;
  }