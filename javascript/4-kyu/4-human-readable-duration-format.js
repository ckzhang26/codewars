function formatDuration (seconds) {
    if (seconds === 0) return 'now';
    
    const units = {  
      year: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    }
    
    while (seconds >= 60) {
      if (seconds >= 31536000) {
        units.year += Math.floor(seconds / 31536000);
        seconds = seconds % 31536000;
      }  
      else if (seconds >= 86400) {
        units.day += Math.floor(seconds / 86400);
        seconds = seconds % 86400;
      }
      else if (seconds >= 3600) {
        units.hour += Math.floor(seconds / 3600);
        seconds = seconds % 3600;
      }
      else if (seconds >= 60) {
        units.minute += Math.floor(seconds / 60);
        seconds = seconds % 60;
      }
    }
    units.second = seconds;
    
    const times = [];
    for (let key in units) {
      if (units[key] > 0) {
        if (units[key] > 1) {
          times.push(`${units[key]} ${key}s`);
        }
        else {
          times.push(`${units[key]} ${key}`);
        }
      }  
    }
    
    let result = '';
    for (let i = 0; i < times.length; i++) {
      if (i < times.length - 2 && times.length > 2) {
        result += times[i] + ', ';
      }
      else if (i === times.length - 1) {
        if (times.length > 1) {
          result += 'and ' + times[i];
        }
        else {
          result += times[i];
        }
      }
      else {
        result += times[i] + ' ';
      }
    }
    
    return result;
}
  