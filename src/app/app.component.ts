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
    this.totalBombsInBoard = Math.floor(Math.random() * (6)) + 10;
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      alert('Inténtalo una vez más! 🔄');
    } else if (result === 'win') {
      alert('Has ganado! Eres el mejor! 💜');
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
    this.totalBombsInBoard = Math.floor(Math.random() * (6)) + 10;
    this.board = new Board(10, this.totalBombsInBoard);
    this.totalFlagsInBoard = 0;
  }
}
