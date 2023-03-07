import { AppComponent } from './app.component';
import { Board } from '../game/board';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBeDefined();
  });

  it('should create a new board on reset', () => {
    component.reset();
    expect(component.board).toBeDefined();
    expect(component.board instanceof Board).toBeTrue();
  });

  it('should have a total of bombs between 10 and 15 in a new board', () => {
    component.reset();
    expect(component.totalBombsInBoard).toBeGreaterThanOrEqual(10);
    expect(component.totalBombsInBoard).toBeLessThanOrEqual(15);
  });

  it('should flag a cell', () => {
    component.reset();
    const cell = component.board.cells[0][0];
    expect(cell.status).toEqual('open');
    component.flag(cell);
    expect(cell.status).toEqual('flag');
  });
});
