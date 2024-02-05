describe('Registration', () => {
  it('Create Account', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type('rafidah')
    cy.get('#lastname').type('marlasari')
    cy.get('#email_address').type('rafidahmarlasari@gmail.com')
    cy.get('#password').type('Password123')
    cy.get('#password-confirmation').type('Password123')
    cy.get('#form-validate').click()
    cy.url().should('contain','https://magento.softwaretestingboard.com/customer/account/')
  })
})