function rentalCarCost(d) {
    const cost = d * 40;
    if (d >= 7) return cost - 50;
    if (d >= 3) return cost - 20;
    return cost;
  }