function isSortedAndHow(array) {
    let ascending = 'yes, ascending';
    let descending = 'yes, descending';
    
    for (let i = 1; i < array.length; i++) {
      if (ascending && array[i] < array[i - 1]) {
        ascending = false;
      }else if (descending && array[i] > array[i - 1]) {
        descending = false;
      }
    }
    
    return ascending || descending || 'no';
  }