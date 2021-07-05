function confirmEnding(string, target) {
    if (string.substr(-target.length) === target) {
      return true;
    } else {
     return false;
    }
  }


  confirmEnding("congratulation", "fo");
  confirmEnding("connor", "n");
  confirmEnding("Bastain", "n");
 
