import { SmartMirrorPage } from './app.po';

describe('smart-mirror App', () => {
  let page: SmartMirrorPage;

  beforeEach(() => {
    page = new SmartMirrorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
