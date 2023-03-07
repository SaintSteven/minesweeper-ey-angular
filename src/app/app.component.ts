import { Component } from '@angular/core';
import { Board } from '../game/board';
import { Cell } from '../game/cell';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Buscaminas EY';
  board!: Board;
  totalFlagsInBoard: number;
  totalBombsInBoard: number;

  constructor() {
    this.reset();
    this.totalFlagsInBoard = 0;
    this.totalBombsInBoard = 20 - Math.floor(Math.random() * 10);
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      alert('You lose');
    } else if (result === 'win') {
      alert('you win');
    }
  }

  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
      this.totalFlagsInBoard--;
    } else if (cell.status === 'open') {
      cell.status = 'flag';
      this.totalFlagsInBoard++;
    }
  }

  reset() {
    const totalBombs = 20 - Math.floor(Math.random() * 10)
    this.board = new Board(10, totalBombs);
    this.totalFlagsInBoard = 0;
  }
}
