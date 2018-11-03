class Board {
    constructor(){
        this.currentPlayer = 'x';
        this.tiles = [];
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
        tile.setValue(this.currentPlayer);
        this.checkTheResult();
        this.changeCurrentPlayer();
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
    }
    showModalInfo(winner){
        console.log('wygrał gracz: ', winner);
    }
}
const myBoard = new Board();
