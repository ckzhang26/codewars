/* left blank for unlimited creativity :) */

function multiplyAll(arr) {
    return function multiplyByX(x) {
      return arr.map(element => x * element);
    }
  }