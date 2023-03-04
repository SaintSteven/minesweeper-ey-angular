import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  boardSize: number;

  constructor() {
    this.boardSize = 10;

    this.generateBombsMap(this.boardSize);
  }

  generateEmptyBoard(boardSize: number) {
    let emptyBoard: any[] = [];

    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y < boardSize; y++) {
        let cell = {
          x: x,
          y: y,
          status: 'SAFE',
          hasBomb: false,
          isFlagged: false,
          nearBombs: 0
        }
        emptyBoard.push(cell);
      }
    }
    return emptyBoard;
  }

  generateBombsMap(boardSize: number) {
    let bombsMap: any[] = [];
    let bombsCount = boardSize + Math.floor(Math.random() * 11);

    while (bombsCount > bombsMap.length) {
      let x = Math.floor(Math.random() * boardSize);
      let y = Math.floor(Math.random() * boardSize);
      let bomb = {
        x: x,
        y: y,
      }
      if (bombsMap.some(
        (bombPlanted) => bombPlanted.x === x && bombPlanted.y === y)) continue
      bombsMap.push(bomb);
    }
    return bombsMap;
  }

  putBombsInEmptyBoard(emptyBoard: any[], bombsMap: any[]) {
    return emptyBoard.map((cell) => {
      let bomb = bombsMap.find((bomb) => {
        return (bomb.x === bomb.x && bomb.y === bomb.y)
      })
      if (bomb) {
        return { ...cell, hasBomb: true }
      } else {
        return { ...cell }
      }
    })
  }
}
