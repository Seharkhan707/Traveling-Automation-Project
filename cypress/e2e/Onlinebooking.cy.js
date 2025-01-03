describe('Travelling site', () => {
  it('searches for Karachi and selects it from the dropdown', () => {
    // Ignore uncaught exceptions
    cy.on('uncaught:exception', (err) => {
      console.log('Uncaught exception:', err);
      return false; // Ignore exceptions
    });

    // Visit the website
    cy.visit('https://www.wego.pk/hotels');

    // Type "karachi" in the search box
    cy.get('#destinationSearchQuery').click().clear().type('karachi')

    // Wait for the dropdown to appear and select "Karachi"
    // Replace with the correct class or selector for the dropdown
      .should('have.length.greaterThan', 0) 
      .find('li') // Find all list items
      .each(($el) => {
        if ($el.text().trim() === 'Karachi, Pakistan') {
          cy.wrap($el).click();
        }
      });
  });
});
