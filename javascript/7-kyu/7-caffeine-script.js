function caffeineBuzz(n){
    if (n % 12 === 0) return 'CoffeeScript';
    else if (n % 3 === 0 && n % 2 === 0) return 'JavaScript';
    else if (n % 3 === 0) return 'Java';
    return 'mocha_missing!';
  }