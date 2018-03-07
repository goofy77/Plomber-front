import { PlomberFrontPage } from './app.po';

describe('plomber-front App', () => {
  let page: PlomberFrontPage;

  beforeEach(() => {
    page = new PlomberFrontPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
