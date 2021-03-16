function averages(numbers) {
    const result = [];
    if (!numbers || numbers.length < 2) return result;
    
    for (let i = 0; i < numbers.length - 1; i++) {
      result.push((numbers[i] + numbers[i + 1]) / 2);
    }
    
    return result;
  }