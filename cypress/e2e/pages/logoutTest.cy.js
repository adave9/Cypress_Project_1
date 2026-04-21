import loginPage from '../../pages/loginPage'
import logoutPage from "../../pages/logoutPage.js"

describe("SauceDemo Logout Test", () => {
  it("Should logout successfully", () => {

    let homeTitle;

    cy.fixture('example').then((data)=>{
        homeTitle = data.homeTitle;
    })

    loginPage.visit();

    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("secret_sauce");

    loginPage.clickLogin();
    loginPage.verifyLoginSuccess();

    logoutPage.waitingForAction(2000);
    logoutPage.clickLogout();
    logoutPage.waitingForAction(2000);

    logoutPage.verifyTitle(homeTitle);
  })
})
