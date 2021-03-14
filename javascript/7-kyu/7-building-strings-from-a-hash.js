function solution(pairs){
    const result = [];
    for (let key in pairs) {
      result.push(`${key} = ${pairs[key]}`);
    }
    return result.join(',');
  }