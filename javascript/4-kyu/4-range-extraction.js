function solution(list){
    const result = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i + 1] - list[i] === 1 && list[i + 2] - list[i + 1] === 1) {
        const start = list[i];
        while (list[i + 1] - list[i] === 1) i++;
        const end = list[i];
        result.push(start + '-' + end);
      } else {
        result.push(list[i]);
      }
    }
    
    return result.join();
  }