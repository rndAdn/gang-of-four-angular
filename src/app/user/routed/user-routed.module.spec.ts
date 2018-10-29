import { UserRoutedModule } from './user-routed.module';

describe('UserRoutedModule', () => {
  let userRoutedModule: UserRoutedModule;

  beforeEach(() => {
    userRoutedModule = new UserRoutedModule();
  });

  it('should create an instance', () => {
    expect(userRoutedModule).toBeTruthy();
  });
});
