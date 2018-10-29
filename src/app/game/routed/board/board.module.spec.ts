import { BoardModule } from './board.module';

describe('BoardRoutedModule', () => {
  let boardModule: BoardModule;

  beforeEach(() => {
    boardModule = new BoardModule();
  });

  it('should create an instance', () => {
    expect(boardModule).toBeTruthy();
  });
});
