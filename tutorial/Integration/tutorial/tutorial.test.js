import TutorialPage from "../component_objects/TutorialPage"

describe("Tutorial Page : Open, Verify, Click, Screenshot : ", () => {
  it("reaches the page", () => {
    TutorialPage.open()
  })

  it("Verify Image is Visible", () => {
    expect(TutorialPage.Image.isDisplayed()).to.be.equal(true)
  })

  it("Clicks a Button", () => {
    TutorialPage.Button.click()
  })

  it("Verify Image is still Visible and take Screenshot", () => {
    expect(TutorialPage.Image.isDisplayed()).to.be.equal(true)
    TutorialPage.Image.saveScreenshot('./Screenshots/Screenshot.png')
  })
})
