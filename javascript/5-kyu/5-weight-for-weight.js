function orderWeight(strng) {
    return strng.split(' ').sort((a, b) => {
      const weightA = a.split('').reduce((x, y) => x + +y, 0);
      const weightB = b.split('').reduce((x, y) => x + +y, 0);
      
        if (weightA < weightB) return -1;
        else if (weightA > weightB) return 1;
        else if (a < b) return -1;
        else return 1;
    }).join(' ');
  }