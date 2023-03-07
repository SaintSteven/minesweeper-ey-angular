import { Board } from './board';

describe('Board', () => {
  let board: Board;

  beforeEach(() => {
    board = new Board(10, 10);
  });

  it('should create a board with the given size and mines', () => {
    expect(board.cells.length).toEqual(10);
    expect(board.cells[0].length).toEqual(10);
    let mineCount = 0;
    for (const row of board.cells) {
      for (const cell of row) {
        if (cell.mine) {
          mineCount++;
        }
      }
    }
    expect(mineCount).toEqual(10);
  });
});
