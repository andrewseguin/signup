import { SignupPage } from './app.po';

describe('signup App', () => {
  let page: SignupPage;

  beforeEach(() => {
    page = new SignupPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
