class TicTacToe {
    constructor() {
        this.x = 'x';
        this.o = 'o';
        this.curPlayer = this.x;
        this.first = true;
        this.n = 3;
                
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        
    }

    getCurrentPlayerSymbol() {
       
        return this.curPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.getFieldValue(rowIndex, columnIndex) == null){
            if(this.curPlayer == this.x){
                this.matrix[rowIndex][columnIndex] = this.curPlayer;
                this.curPlayer = this.o;
            } else{
                this.matrix[rowIndex][columnIndex] = this.curPlayer;
                this.curPlayer = this.x;
            }
          
            this.changePlayer = true;
        } 
    }

    isFinished() {
        if((this.getWinner() !== null) || (this.isDraw() == true)){
            return true;
        } else{
            return false;
        }
    }

    getWinner() {
        for(var i=0; i<this.n; i++){
            if((this.matrix[i][0]===this.matrix[i][1])&&
               (this.matrix[i][0]===this.matrix[i][2])&&
               (this.matrix[i][0]!==null)){
               return this.matrix[i][0];
            }
        }
        for(var j=0; j<this.n; j++){
            if((this.matrix[0][j]==this.matrix[1][j])&&
               (this.matrix[0][j]==this.matrix[2][j])&&
               (this.matrix[0][j]!=null)){
                return this.matrix[0][j];
            }
        }
        if((this.matrix[0][0]==this.matrix[1][1])&&
           (this.matrix[0][0]==this.matrix[2][2])&&
           (this.matrix[0][0]!=null)){
            return this.matrix[0][0];
        }
        if((this.matrix[0][2]==this.matrix[1][1])&&
           (this.matrix[1][1]==this.matrix[2][0])&&
           (this.matrix[1][1]!=null)){
            return this.matrix[1][1];
        }
        return null;
    }

    noMoreTurns() {
        var empPlace=0;
        for(var i=0; i<this.n; i++){
            for(var j=0; j<this.n; j++){
                if(this.matrix[i][j]===null){
                    empPlace++;

                }
            }
        }
        if(empPlace==0){
            return true;
        }
        return false;
    }

    isDraw() {
        if((this.noMoreTurns()==true) && (this.getWinner()==null)){
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
