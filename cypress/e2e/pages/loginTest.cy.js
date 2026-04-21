import loginPage from '../../pages/loginPage'

describe('SauceDemo Login Test', () => {

  it('Should login successfully', () => {

    loginPage.visit()

    loginPage.enterUsername('standard_user')
    loginPage.enterPassword('secret_sauce')

    loginPage.clickLogin()

    loginPage.verifyLoginSuccess()
  })

})