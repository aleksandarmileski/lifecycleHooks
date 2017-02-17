import { browser, element, by } from 'protractor';

export class LifecycleHooksPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lh-root h1')).getText();
  }
}
