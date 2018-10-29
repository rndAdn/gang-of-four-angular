import { LobbyRoutedModule } from './lobby-routed.module';

describe('LobbyRoutedModule', () => {
  let lobbyModule: LobbyRoutedModule;

  beforeEach(() => {
    lobbyModule = new LobbyRoutedModule();
  });

  it('should create an instance', () => {
    expect(lobbyModule).toBeTruthy();
  });
});
