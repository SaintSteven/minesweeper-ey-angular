export class Cell {
  status: 'opened' | 'cleared' | 'flagged' = 'opened';
  hasBomb = false;
  nearBombs = 0;
  hasFlag = false;

  constructor(public y: number, public x: number) {

  }
}