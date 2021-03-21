function getMissingElement(superImportantArray){
    const completeArr = [...Array(10).keys()];
    
    for (let element of completeArr) {
      if (!superImportantArray.includes(element)) return element;
    }
  }