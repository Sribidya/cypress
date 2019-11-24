describe('Ease-Live', function(){
    it('successfully loads',function(){
    cy.visit('https://sixty.no/')
    cy.get('#hs-eu-confirmation-button').click()
    cy.get('nav > ul > :nth-child(1) > a').click()
    cy.url()
    cy.location().should((loc)=> {
        expect(loc.href).to.eq('https://www.sixty.no/ease-live/')
   }) 
 }) 
}) 