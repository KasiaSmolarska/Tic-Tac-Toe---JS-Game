class Board {
    constructor(){
        this.currentPlayer = 'x';
        this.xWins = 0;
        this.oWins = 0;
        this.draws = 0;
        this.createBoard();
    }

    createBoard(){
        this.tiles = [];
        this.isBloked = false;
        boardContainer.innerHTML = '';
        for (let x = 0; x < 3; x++) {
            this.tiles.push([]);
            for (let y = 0; y < 3; y++) {
              const tile = new Tile(x,y);
              tile.onClick(this.setNewTileValue.bind(this));
              this.tiles[x].push(tile);
            }            
        }
    }

    setNewTileValue(tile){
        if (!this.isBloked) {
            tile.setValue(this.currentPlayer);
            this.checkTheResult();
            this.changeCurrentPlayer();
        }
    }
    changeCurrentPlayer(){
        if (this.currentPlayer === 'x') {
            this.currentPlayer = 'y';
        }else{
            this.currentPlayer = 'x';
        };
    }
    checkTheResult(){
        for (let i = 0; i < this.tiles.length; i++) {
            const row = this.tiles[i];
            const valueOfTile1 = row[0].getValue();
            const valueOfTile2 = row[1].getValue();
            const valueOfTile3 = row[2].getValue();

            if(valueOfTile1 === valueOfTile2 && valueOfTile2 === valueOfTile3 && valueOfTile1 === valueOfTile3 && valueOfTile1 !== undefined){
               return this.showModalInfo(valueOfTile1);
            }
        }

        for (let i = 0; i < this.tiles.length; i++) {
            
            const valueOfTile1 = this.tiles[0][i].getValue();
            const valueOfTile2 = this.tiles[1][i].getValue();
            const valueOfTile3 = this.tiles[2][i].getValue();

            if(valueOfTile1 === valueOfTile2 && valueOfTile2 === valueOfTile3 && valueOfTile1 === valueOfTile3 && valueOfTile1 !== undefined){
                return this.showModalInfo(valueOfTile1);
             }
        }

        if((this.tiles[0][0].getValue() === this.tiles[1][1].getValue() && this.tiles[0][0].getValue() === this.tiles[2][2].getValue() && this.tiles[2][2].getValue() !== undefined) || (this.tiles[0][2].getValue() === this.tiles[1][1].getValue() && this.tiles[0][2].getValue() === this.tiles[2][0].getValue() && this.tiles[2][0].getValue() !== undefined)){
            return this.showModalInfo( this.tiles[1][1].getValue());
        }

        // CHECK DRAWS
        let fillenTiles = 0;

        for (let i = 0; i < this.tiles.length; i++) {
            const row = this.tiles[i];
            for (let j = 0; j < row.length; j++) {
                const tile = row[j];
                if (tile.getValue()) {
                    fillenTiles++;
                }
                if(fillenTiles === 9){
                    return this.showModalInfo(false);
                }
            }


        }
    }
    showModalInfo(info){
        this.updateStats(info);
        if(info){
            return console.log('wygrał gracz: ', info);
        }
        return console.log("remis");
    }
    
    updateStats(winner){
        if(winner === 'x'){
            this.xWins++;
            document.querySelector('.game__stats-x-wins-value').innerHTML = this.xWins;
        }else if(winner == 'y'){
            this.oWins++;
            document.querySelector('.game__stats-o-wins-value').innerHTML = this.oWins;
        }else{
            this.draws++;
            document.querySelector('.game__stats-draws-value').innerHTML = this.draws;
        }
        this.isBloked = true;
    }
}
const myBoard = new Board();
