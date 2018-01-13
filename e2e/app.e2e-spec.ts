import { LacteosdiquenoAppPage } from './app.po';

describe('lacteosdiqueno-app App', () => {
  let page: LacteosdiquenoAppPage;

  beforeEach(() => {
    page = new LacteosdiquenoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
