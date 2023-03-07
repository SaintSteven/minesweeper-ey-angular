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

  constructor() {
    this.reset();
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
    } else if (cell.status === 'open') {
      cell.status = 'flag';
    }
  }

  reset() {
    const totalBombs = 20 - Math.floor(Math.random() * 10)
    this.board = new Board(10, totalBombs);
  }
}
