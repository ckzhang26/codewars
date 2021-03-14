function gps(s, x) {
    if (x.length <= 1) return 0;
    
    const distances = [];
    
    for (let i = 1; i < x.length; i++) {
      distances.push(x[i] - x[i - 1]);
    }
    
    return Math.max(...distances.map(distance => Math.floor((3600 * distance) / s)));
  }
  