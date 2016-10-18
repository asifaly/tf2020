import { browser, element, by } from 'protractor';

export class Tf2020Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tf-root h1')).getText();
  }
}
