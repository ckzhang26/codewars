function solution(input, markers) {
    if (!markers.length) return input.replace(/\s+(?=\n)/g, '');
    
    const special = ["[", "\\", "^", "$", '.', '|', '?', '*', '+', '(', ')'];
    const marker = special.includes(markers[0]) ? `\\${markers[0]}` : markers[0];
    const regex = new RegExp(`${marker}\.+`, 'g');
    return solution(input.replace(regex, '').trim(), markers.slice(1));
  };