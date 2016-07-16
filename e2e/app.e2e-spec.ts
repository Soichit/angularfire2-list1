import { ShopListPage } from './app.po';

describe('shop-list App', function() {
  let page: ShopListPage;

  beforeEach(() => {
    page = new ShopListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
