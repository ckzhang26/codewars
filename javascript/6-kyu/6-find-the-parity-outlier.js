function findOutlier(integers){
    const evens = [];
    const odds = [];
    
    for (let integer of integers) { 
      integer % 2 === 0 ? evens.push(integer) : odds.push(integer);
    }
    
    return evens.length > odds.length ? odds[0] : evens[0];
  }