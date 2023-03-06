import { Cell } from './cell';

export class Board {
  cells: Cell[][] = [];
  constructor(boardSize: number, totalMines: number) {
    for (let y = 0; y < boardSize; y++) {
      this.cells[y] = [];
      for (let x = 0; x < boardSize; x++) {
        this.cells[y][x] = new Cell(y, x);
      }
    }

    for (let i = 0; i < totalMines; i++) {
      this.getRandomCell().hasBomb = true;
    }

    const peers = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];


    for (let y = 0; y < totalMines; y++) {
      for (let x = 0; x < totalMines; x++) {
        let bombs = 0;
        for (const peer of peers) {
          if (this.cells[y + peer[0]][x + peer[1]] && this.cells[y + peer[0]][x + peer[1]].hasBomb) bombs++;
        }
        this.cells[y][x].nearBombs = bombs;
      }
    }
  }

  getRandomCell(): Cell {
    const x = Math.floor(Math.random() * this.cells.length);
    const y = Math.floor(Math.random() * this.cells.length);
    return this.cells[y][x];
  }

  checkCell(cell: Cell) {
    if (cell.status === 'opened') {
      return;
    } else if (cell.hasBomb) {
      this.gameOver();
    } else {
      cell.status = 'cleared';
    }
  }

  gameOver() {
    console.log('game over  ');
  }

}