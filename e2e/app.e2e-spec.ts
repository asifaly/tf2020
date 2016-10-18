import { Tf2020Page } from './app.po';

describe('tf-2020 App', function() {
  let page: Tf2020Page;

  beforeEach(() => {
    page = new Tf2020Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('tf works!');
  });
});
