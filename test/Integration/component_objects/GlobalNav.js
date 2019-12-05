import Page from "./Page";

class GlobalNav extends Page {
  
  get H() {
    return $( '#header-logo-huge' );
  }

  get expandedNav() {
    return $( '[class="global-nav-wrapper global-nav-wrapper--open"]' )
  }
 
  open(path) {
    super.open(path);
  }
}

export default new GlobalNav();
