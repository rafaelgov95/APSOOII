import { MyappFrontPage } from './app.po';

describe('myapp-front App', () => {
  let page: MyappFrontPage;

  beforeEach(() => {
    page = new MyappFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
