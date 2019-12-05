const assert = require('assert');

describe('example.com home page', () => {
  it('should have the right content', () => {
    browser.url('https://example.com');
    const title = browser.getTitle();
    assert.equal(title, 'Example Domain');
    const text = $$('p')[0].getText();
    expect(text).to.include('is established');
  });
});
