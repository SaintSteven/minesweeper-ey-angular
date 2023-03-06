import { Component } from '@angular/core';
import { Cell } from 'src/game/cell';
import { Board } from '../game/board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Buscaminas EY';
  board = new Board(10, 5);

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    if (result === 'gameover') {
      alert('Game Over!');
    } else if (result === 'win') {
      alert('You Win!');
    } else {
      flagCell();
    }
  }

  flagCell(cell: Cell) {
    cell.hasFlag = true;
  }


}
