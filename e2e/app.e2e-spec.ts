import { DeactivatePage } from './app.po';

describe('deactivate App', function() {
  let page: DeactivatePage;

  beforeEach(() => {
    page = new DeactivatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
