import { NgxGraphqlTutorialPage } from './app.po';

describe('ngx-graphql-tutorial App', () => {
  let page: NgxGraphqlTutorialPage;

  beforeEach(() => {
    page = new NgxGraphqlTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
