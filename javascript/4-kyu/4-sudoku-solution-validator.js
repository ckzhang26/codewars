function validSolution(board){
    if (board.length === 3 && board[0].length === 3) {
      let sum = 45;
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
          if (board[i][j] === 0) return false;
          sum -= board[i][j];
        }
      }
      return sum === 0;
    }
    
    if (board.length > 3) {
      return validSolution(board.splice(0, 3)) && validSolution(board);
    }
    
    if (board[0].length > 3) {
      return validSolution([board[0].splice(0, 3), board[1].splice(0, 3), board[2].splice(0, 3)]) 
      && validSolution(board);
    }
  }