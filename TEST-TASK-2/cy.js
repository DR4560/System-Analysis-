describe('The Form', () => {
  it('Form had been sent successfully', () => {
    cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template');
    cy.get('input[name="name"]').type('Name Named'); 
    cy.get('input[name="email"]').type('name.named@example.com');
    cy.get('textarea[name="message"]').type('Text msg'); 
    
    cy.get('button[type="submit"]').click();


    cy.get('.success-message') 
      .should('be.visible') 
      .and('contain', 'Thank you for your message!');
  });
});
