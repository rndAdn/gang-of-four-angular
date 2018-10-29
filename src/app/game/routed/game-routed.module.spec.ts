import { GameRoutedModule } from './game-routed.module';

describe('GameRoutedModule', () => {
  let gameRoutedModule: GameRoutedModule;

  beforeEach(() => {
    gameRoutedModule = new GameRoutedModule();
  });

  it('should create an instance', () => {
    expect(gameRoutedModule).toBeTruthy();
  });
});
