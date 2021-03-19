function alphabetWar(fight)
{
  const powers = {
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1,
    'm': 4,
    'q': 3,
    'd': 2,
    'z': 1
  }
  
  const leftLetters = ['w', 'p', 'b', 's'];
  const rightLetters = ['m', 'q', 'd', 'z'];
  let leftTotal = 0, rightTotal = 0;
  
  for (let letter of fight) {
    if (leftLetters.includes(letter)) leftTotal += powers[letter];
    else if (rightLetters.includes(letter)) rightTotal += powers[letter];
  }
  
  if (leftTotal > rightTotal) return 'Left side wins!';
  else if (rightTotal > leftTotal) return 'Right side wins!';
  else return "Let's fight again!";
}