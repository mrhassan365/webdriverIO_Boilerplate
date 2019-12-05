import Page from "./Page";

class TutorialPage extends Page {
  
  get Image() {
    return $( '[class="header"]' );
  }

  get Button() {
    return $( '#cardthumb_6809692' )
  }
 
  open(path) {
    super.open(path);
  }
}

export default new TutorialPage();
