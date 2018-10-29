import { BoardRoutedModule } from './board-routed.module';

describe('BoardRoutedModule', () => {
  let boardModule: BoardRoutedModule;

  beforeEach(() => {
    boardModule = new BoardRoutedModule();
  });

  it('should create an instance', () => {
    expect(boardModule).toBeTruthy();
  });
});
