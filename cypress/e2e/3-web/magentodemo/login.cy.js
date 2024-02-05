describe('Login Functionality', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    })
  it('Verify Failed Login - Wrong Creds', () => {
    cy.get('#email').type('fifi@gmail.com')
    cy.get('#pass').type('1234')
    cy.get('#send2').click()
    cy.get('.message-error > div').should('be.visible')
  })
  it('Verify Failed Login - Wrong Email', () => {
    cy.get('#email').type("aaaa")
    cy.get('#pass').type("1234")
    cy.get('#send2').click()
    cy.get('#email-error').should('be.visible')
  })
})

