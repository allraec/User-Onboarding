describe('Forms App Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passInput = () => cy.get('input[name=password]');
    const cbInput = () => cy.get('input[name=agreeTerms]')
    const submitForm = () => cy.get('form');

    const errorName= () => cy.get('div[class=errorName]');
    const errorEmail= () => cy.get('div[class=errorEmail]');

    it('should type stuff in the inputs', () => {
        nameInput()
        .should('have.value', '')
        .type('Allison Castaneda')
        .should('have.value', 'Allison Castaneda');

        emailInput()
        .should('have.value', '')
        .type('allraec21@email.com')
        .should('have.value', 'allraec21@email.com');

        passInput()
        .should('have.value', '')
        .type('jkasddhfbhdf')
        .should('have.value', 'jkasddhfbhdf');
        
    });

    it('should check if a user can check the terms of service box', () => {

        cbInput()
        .uncheck()
        .should('not.be.checked')
        .click()
        .should('be.checked')
        
    });

    it('should check if a user can submit the form data', () => {

        submitForm()
        .submit();

        nameInput()
        .should('have.value', '');

        emailInput()
        .should('have.value', '');

        passInput()
        .should('have.value', '');

        cbInput()
        .should('not.be.checked');

    });

    it('should check for form validation if an input is left empty', () => {

        nameInput()
        .should('have.value', '')
        .type('Allison Castaneda')
        .should('have.value', 'Allison Castaneda');

        
        emailInput()
        .should('have.value', 'this must be a valid email');

        passInput()
        .should('have.value', 'this must be at least 8 characters');
    });
});