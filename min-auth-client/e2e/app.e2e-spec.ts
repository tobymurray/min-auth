import { MinAuthClientPage } from './app.po';

describe('min-auth-client App', function() {
  let page: MinAuthClientPage;

  beforeEach(() => {
    page = new MinAuthClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
