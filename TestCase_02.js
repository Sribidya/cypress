describe('Contact', function(){
    it('successfully loads',function(){
    cy.visit('https://sixty.no/')
    cy.get('#hs-eu-confirmation-button').click()
    cy.get('nav > ul > :nth-child(7) > a').click()
    })

    //Send message
	it('Enter Credentials',function(){
		cy.get('[type="email"]').type('test@test.com')
		cy.get('[name="firstname"]').type('Sribidya')
	    cy.get('[name="lastname"]').type('Mohapatra')
	    cy.get('[name="message"]').type('This is to test')
	    cy.get('[type="checkbox"]').check()
	    cy.get('.hs-button').click()
    
 }) 
}) 