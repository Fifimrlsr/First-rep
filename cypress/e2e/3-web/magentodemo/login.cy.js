describe('Login Functionality', () => {
  it('Verify Failed Login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type('fifi@gmail.com')
    cy.get('#pass').type('1234')
    cy.get('#send2').click()
  })
})