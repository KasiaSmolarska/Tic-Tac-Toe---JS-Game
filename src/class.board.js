class Board {
    constructor(){
        this.tiles = [];
        for (let x = 1; x < 4; x++) {
            for (let y = 1; y < 4; y++) {
              const tile = new Tile(x,y);
              tile.onClick(this.setNewTileValue);
              this.tiles.push(tile);
            }            
        }


    }
    setNewTileValue(tile){
        console.log(tile);
        tile.setValue('x');
    }
}
new Board();