import { TodotaskclientPage } from './app.po';

describe('todotaskclient App', () => {
  let page: TodotaskclientPage;

  beforeEach(() => {
    page = new TodotaskclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
