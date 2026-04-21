import {logoutSelectors} from '../objects/logoutSelectors.js'

class logoutPage {

  waitingForAction(timer){
    cy.wait(timer)
  }

  clickLogout() {
    cy.get(logoutSelectors.burgerBtn).click()
    cy.wait(1000)
    cy.get(logoutSelectors.logoutBtn).click()
  }

  verifyTitle(homeTitle)
  {
    cy.title().then((title) => {
        cy.log(title).should('eq',homeTitle);
    });
  
  }
}

export default new logoutPage()