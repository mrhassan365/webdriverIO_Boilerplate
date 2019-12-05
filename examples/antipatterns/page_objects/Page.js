class Page {

  open(path) {
    if (!path) {
      browser.url("/");
    } else {
      browser.url(path);
    }
  }
}

export default Page;
