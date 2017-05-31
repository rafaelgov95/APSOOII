import { LocalvagaPage } from './app.po';

describe('localvaga App', () => {
  let page: LocalvagaPage;

  beforeEach(() => {
    page = new LocalvagaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
