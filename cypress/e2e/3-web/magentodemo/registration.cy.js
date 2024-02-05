describe('Registration', () => {
  beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  })
  it('Success Create Account', () => {
    cy.get('#firstname').type('rafidah')
    cy.get('#lastname').type('marlasari')
    cy.get('#email_address').type('rafidahmarlasari@gmail.com')
    cy.get('#password').type('Password123')
    cy.get('#password-confirmation').type('Password123')
    cy.get('#form-validate').click()
    cy.url().should('contain','https://magento.softwaretestingboard.com/customer/account/')
  })

  it('Failed Create Account - Invalid email', () => {
    cy.get('#firstname').type('rafidah')
    cy.get('#lastname').type('marlasari')
    cy.get('#email_address').type('rafidahmarlasarigmail.com')
    cy.get('#password').type('Password123')
    cy.get('#password-confirmation').type('Password123')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#email_address-error').should('contain.text','Please enter a valid email address (Ex: johndoe@domain.com).')
  })

  it('Failed Create Account - invalid password (<8 symbols)', () => {
    cy.get('#firstname').type('rafidah')
    cy.get('#lastname').type('marlasari')
    cy.get('#email_address').type('rafidahmarlasari@gmail.com')
    cy.get('#password').type('123')
    cy.get('#password-error').should('contain.text','Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    cy.get('#password-confirmation').type('123')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
  })

  it('Failed Create Account - invalid password (>8 symbols)', () => {
    cy.get('#firstname').type('rafidah')
    cy.get('#lastname').type('marlasari')
    cy.get('#email_address').type('rafidahmarlasari@gmail.com')
    cy.get('#password').type('123456789')
    cy.get('#password-error').should('contain.text','Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    cy.get('#password-confirmation').type('123456789')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
  })

  it('Failed Create Account - Wrong confirm password', () => {
    cy.get('#firstname').type('rafidah')
    cy.get('#lastname').type('marlasari')
    cy.get('#email_address').type('rafidahmarlasarigmail.com')
    cy.get('#password').type('Password123')
    cy.get('#password-confirmation').type('Pass123')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-confirmation-error').should('contain.text','Please enter the same value again.')
  })
})