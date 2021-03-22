function goodVsEvil(good, evil){
    const goodWorth = {
      0: 1,
      1: 2,
      2: 3,
      3: 3,
      4: 4,
      5: 10
    }
    
    const evilWorth = {
      0: 1,
      1: 2,
      2: 2,
      3: 2,
      4: 3,
      5: 5,
      6: 10
    }
    
    const goodTotal = good.split(' ').map((el, i) => goodWorth[i] * parseInt(el)).reduce((a, b) => a + b, 0);
    const evilTotal = evil.split(' ').map((el, i) => evilWorth[i] * parseInt(el)).reduce((a, b) => a + b, 0);
    
    if (goodTotal > evilTotal) return "Battle Result: Good triumphs over Evil";
    else if (evilTotal > goodTotal) return "Battle Result: Evil eradicates all trace of Good";
    else return "Battle Result: No victor on this battle field";
  }
  