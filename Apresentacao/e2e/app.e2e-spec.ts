import { ApresentacaoPage } from './app.po';

describe('apresentacao App', () => {
  let page: ApresentacaoPage;

  beforeEach(() => {
    page = new ApresentacaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
