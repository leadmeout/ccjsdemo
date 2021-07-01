Feature('LoginDemo');

Scenario('Login to demo site', ({ I }) => {

  I.amOnPage('/accounts/login')

  // locate field by its label
  I.fillField("Username", "adrian")
  I.fillField("Password", "frankfurt")

  // search for link or button
  I.click("Login");

  I.waitForElement()

});
