import { KurataPage } from './app.po';

describe('kurata App', () => {
  let page: KurataPage;

  beforeEach(() => {
    page = new KurataPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
