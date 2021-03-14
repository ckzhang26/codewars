Array.prototype.numberOfOccurrences = function(n) {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
      if (this[i] === n) count++;
    }
    return count;
  }