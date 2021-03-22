function digitize(n) {
    return n.toString().split('').map(c => +c);
  }