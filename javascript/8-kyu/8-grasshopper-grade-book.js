function getGrade (...grades) {
    const average = grades.reduce((a, b) => a + b, 0) / grades.length;
    
    if (average >= 90) return 'A';
    else if (average >= 80) return 'B';
    else if (average >= 70) return 'C';
    else if (average >= 60) return 'D';
    return 'F';
  }