function potatoes(p0, w0, p1) {
    const dryWeight = w0 - (w0 * (p0 / 100));
    const finalDryPercent = 100 - p1;
    const result = (dryWeight / finalDryPercent) * 100
    
    return result.toString().match(/\.\999/) ? Math.round(result) : Math.trunc(result);
  }