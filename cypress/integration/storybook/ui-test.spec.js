describe('UI Test', () => {

  const PATHS = [
    "tutorial-component--init"
  ]

  for(const path of PATHS) {
    it(`should match screenshot (${path})`, () => {
      const url = `http://localhost:3003/?path=/story/${path}`
      cy.visit(url)
      cy.wait(10000)

      cy.get('#storybook-preview-iframe', { timeout: 10000 })
        .should('be.visible')
        .matchImageSnapshot()
    })
  }
})