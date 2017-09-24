class TicTacToe {
    constructor() {
        this.initMass();
        this.currentSymbol = 'x';
    }

    initMass() {
        this.arr = new Array();
        for (var i = 0; i < 3; i++) {
            this.arr[i] = new Array();
            for (var j = 0; j < 3; j++) {
                this.arr[i][j] = null;
            }
        }
    }

    switchSymbol() {
        if (this.currentSymbol == 'x') {
            this.currentSymbol = 'o';
        } else {
            this.currentSymbol = 'x';
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.arr[rowIndex][columnIndex] == null) {
            this.arr[rowIndex][columnIndex] = this.currentSymbol;
            this.switchSymbol();
        }
    }

    isFinished() {
        return this.getWinner() != null || this.isDraw();
    }

    getWinner() {
        if (this.arr[0][0] == this.arr[1][0] && this.arr[1][0] == this.arr[2][0] && this.arr[2][0] != null) {
            return this.arr[0][0];
        }
        if (this.arr[0][1] == this.arr[1][1] && this.arr[1][1] == this.arr[2][1] && this.arr[2][1] != null) {
            return this.arr[0][1];
        }
        if (this.arr[0][2] == this.arr[1][2] && this.arr[1][2]  == this.arr[2][2] && this.arr[2][2] != null) {
            return this.arr[0][2];
        }
        if (this.arr[0][0] == this.arr[0][1] && this.arr[0][1]== this.arr[0][2] && this.arr[0][2] != null) {
            return this.arr[0][0];
        }
        if (this.arr[1][0] == this.arr[1][1] && this.arr[1][1] == this.arr[1][2] && this.arr[1][2] != null) {
            return this.arr[1][0];
        }
        if (this.arr[2][0] == this.arr[2][1] && this.arr[2][1] == this.arr[2][2]&& this.arr[2][2] != null) {
            return this.arr[2][0];
        }
        if (this.arr[0][0] == this.arr[1][1] && this.arr[1][1] == this.arr[2][2] && this.arr[2][2] != null) {
            return this.arr[0][0];
        }
        if (this.arr[2][0] == this.arr[1][1] && this.arr[1][1] ==this.arr[0][2] && this.arr[0][2] != null) {
            return this.arr[2][0];
        }
        return null;
    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.arr[i][j] == null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        return this.getWinner() == null && this.noMoreTurns() == true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.arr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
