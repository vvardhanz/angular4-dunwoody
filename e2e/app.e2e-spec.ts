import { Angular4DunwoodyPage } from './app.po';

describe('angular4-dunwoody App', () => {
  let page: Angular4DunwoodyPage;

  beforeEach(() => {
    page = new Angular4DunwoodyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
