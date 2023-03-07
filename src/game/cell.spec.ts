import { Cell } from './cell';

describe('Cell', () => {
  let cell: Cell;

  beforeEach(() => {
    cell = new Cell(1, 2);
  });

  it('should create an instance', () => {
    expect(cell).toBeTruthy();
  });

  it('should have default properties', () => {
    expect(cell.status).toEqual('open');
    expect(cell.mine).toBeFalse();
    expect(cell.proximityMines).toEqual(0);
    expect(cell.row).toEqual(1);
    expect(cell.column).toEqual(2);
  });

  it('should set status', () => {
    cell.status = 'clear';
    expect(cell.status).toEqual('clear');
  });

  it('should set mine', () => {
    cell.mine = true;
    expect(cell.mine).toBeTrue();
  });

  it('should set proximity mines', () => {
    cell.proximityMines = 2;
    expect(cell.proximityMines).toEqual(2);
  });
});
