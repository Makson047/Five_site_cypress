import './commands'
import * as header from '../fixtures/headerLocators.json'


Cypress.Commands.add('checkHeader', () => {
    cy.get(header.headerContainer).should('be.visible')
        .within(() => {

        cy.get(header.mainLogo).should('be.visible')  // main logo present on page

        cy.get('span').contains('Services')  // Services section present
            .parent('a[href]').should('have.attr', 'href','/services')

        cy.get('span').contains('Industries')  // Industries section present
            .parent('a[href]').should('have.attr', 'href','/industries')

        cy.get('span').contains('Products')  // Products section present
            .parent('a[href]').should('have.attr', 'href','/products')

        cy.get('span').contains('About')  // About section present
            .parent('a[href]').should('have.attr', 'href','/about')

        cy.get('span').contains('Contacts')  // Contacts section present
            .parent('a[href]').should('have.attr', 'href','/contacts')

        cy.get('span').contains('Vacancies')  // Vacancies section present
            .parent('a[href]').should('have.attr', 'href','/vacancies')

        cy.get('span').contains('Vacancies')  // Languages selector section present
            .parent('a[href]').should('have.attr', 'href','/vacancies')
    })

    // Check language changing
    cy.get(header.languageSelector).should('be.visible')
    cy.get('button').contains('UA').click()
        cy.get('.ListItem_link__item__XUM_h').first().should('have.text', 'Сервіси')
    cy.get('button').contains('EN').click()
        cy.get('.ListItem_link__item__XUM_h').first().should('have.text', 'Services')

    cy.url().then(($url) => {
        if($url.includes('/home') || $url.includes('/contacts')) {
            //do nothing
        } else {
            cy.get(header.getEstimateButton).click()
            cy.url().should('include', '/contacts')
        }})

    cy.get(header.homeLink).click()
    cy.url().should('include', '/home')  // you located on home page
})
