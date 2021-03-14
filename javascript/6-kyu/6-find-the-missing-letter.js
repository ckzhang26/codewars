function findMissingLetter(array)
{
  for (let i = 1; i < array.length; i++) {
    const prevCharCode = array[i - 1].charCodeAt(0);
    const currCharCode = array[i].charCodeAt(0);
    if (currCharCode - prevCharCode !== 1) {
      return String.fromCharCode(prevCharCode + 1);
    }    
  }
}