sudoku = puzzle => {

    const isValid = (board,i,j,val) => {
        for (let c=0; c<9; c++) {
          if (board[i][c] == val) {
            return false;
          }
        }
        
        for (let r = 0;r<9; r++) {
          if (board[r][j] == val) {
            return false;
          }
        }
      
        let x_ = Math.floor(i / 3) * 3, y_ = Math.floor(j / 3) * 3;  
        for (let x=x_;x<x_+3; x++) {
          for (let y=y_;y<y_+3;y++) {
            if (val == board[x][y]) {
              return false;
            }
          }
        }

        return true;
    }

    const checked = (board,i,j) => {

        if (i == 9) { i = 0; j = j+1; if (j == 9) { return true;}}
        if (board[i][j] > 0) {return checked(board, i+1, j);}

        for (let val = 1; val <= 9; val++) {    
            if (isValid(board, i, j, val)) {
                board[i][j] = val;
                if (checked(board, i+1, j)) {return true;} 
            }  
        }

        board[i][j] = 0;
        return false;
    }

    let board = JSON.parse(JSON.stringify(puzzle));
    if (checked(board, 0, 0)) {
      return board;
    }

    return null;
}

// test case
console.log(sudoku([
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]]))