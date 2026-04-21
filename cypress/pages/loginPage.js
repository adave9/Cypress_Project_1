import { loginSelectors } from '../objects/loginSelectors'

class LoginPage {

  visit() {
    cy.visit('https://www.saucedemo.com/')
  }

  enterUsername(username) {
    cy.get(loginSelectors.username).type(username)
  }

  enterPassword(password) {
    cy.get(loginSelectors.password).type(password)
  }

  clickLogin() {
    cy.get(loginSelectors.loginBtn).click()
  }

  verifyLoginSuccess() {
    cy.get(loginSelectors.dashboardTitle)
      .should('have.text', 'Products')
  }
}

export default new LoginPage()