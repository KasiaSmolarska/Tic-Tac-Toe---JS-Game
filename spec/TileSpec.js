describe("Tile", function() {
    
    it("should create li element", function() {
      const tile = new Tile(2,2);
        
      expect(tile.li instanceof Element).toBeTruthy();
    });

    it("should return undefined if the value is not given", function () {
      const tile = new Tile(2,2);

      const value = tile.getValue();

      expect(value).toBe(undefined);
    });
    it("should return 'X' when that kind of value is given", function () {
      const tile = new Tile(2,2);

      tile.setValue('x');

      expect(tile.getValue()).toBe('x');
    });
    it("should return 'y' when that kind of value is given", function () {
      const tile = new Tile(2,2);

      tile.setValue('y');

      expect(tile.getValue()).toBe('y');
    });
  });