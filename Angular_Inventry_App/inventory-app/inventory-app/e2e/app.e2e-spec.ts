import { InventoryAppPage } from './app.po';

describe('inventory-app App', () => {
  let page: InventoryAppPage;

  beforeEach(() => {
    page = new InventoryAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
