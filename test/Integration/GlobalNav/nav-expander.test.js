import GlobalNav from "../component_objects/GlobalNav"

describe("Global Nav : opens and closes", () => {
  it("reaches the homepage", () => {
    GlobalNav.open()
  })

  it("lands with the nav closed", () => {
    expect(GlobalNav.expandedNav.isDisplayed()).to.be.equal(false)
  })

  it("clicks on the logo, expanding the nav", () => {
    GlobalNav.H.click()
    expect(GlobalNav.expandedNav.isDisplayed()).to.be.equal(true)
  })

  it("closes again when clicked", () => {
    GlobalNav.H.click()
    expect(GlobalNav.expandedNav.isDisplayed()).to.be.equal(false)
  })
})
