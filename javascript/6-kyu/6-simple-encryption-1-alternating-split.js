function encrypt(text, n) {
    if (!text) return text;
    
    let result = '';
    for (let i = 1; i < text.length; i += 2) {
      result += text[i];
    }
    
    for (let i = 0; i < text.length; i += 2) {
      result += text[i];
    }
      
    return n > 0 ? encrypt(result, n - 1) : text;
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText) return encryptedText;
    
    const firstHalf = encryptedText.slice(0, Math.floor(encryptedText.length / 2));
    const lastHalf = encryptedText.slice(Math.floor(encryptedText.length / 2));
    let result = '';
    
    for (let i = 0; i < Math.min(firstHalf.length, lastHalf.length); i++) {
      result += lastHalf[i];
      result += firstHalf[i];
    }
  
    if (firstHalf.length > lastHalf.length) result += firstHalf[firstHalf.length - 1];
    else if (lastHalf.length > firstHalf.length) result += lastHalf[lastHalf.length - 1];
    
    return n > 0 ? decrypt(result, n - 1) : encryptedText;
  }