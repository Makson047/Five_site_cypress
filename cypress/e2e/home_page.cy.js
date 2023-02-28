import * as homePage from '../fixtures/homePageLocators.json'

describe('Home page', () => {
    beforeEach(()=>{
        cy.visit('/home')
        cy.checkHeader()
    })

    it('Animation block', () => {
        cy.get(homePage.animationBlock).should('be.visible').within(() => {
        cy.get('video')
            .should('have.prop', 'paused', false)
            .and('have.prop', 'ended', false)
        })
    })

    it('Who we are block', () => {
        cy.get(homePage.whoWeAreBlock).scrollIntoView().should('be.visible')
            .within(() => {
            cy.get(homePage.whoWeAreImage).should('be.visible')
                .children('img').should('be.visible')

            cy.get(homePage.whoWeAreText).should('be.visible')

            cy.get(homePage.whoWeAreContactButton).click()
            cy.url().should('include', '/contacts')
        })
    })

    it('What we offer', () => {
        cy.get(homePage.whatWeOfferBlock).scrollIntoView().should('be.visible')
            .within(() => {
                cy.get(".swiper").should('be.visible')
            })
    })

    it('Partners', () => {
        cy.get(homePage.PartnersBlock).scrollIntoView().should('be.visible')
            .within(() => {
                cy.get('.swiper').should('be.visible')
            })
    })

    it('Advice', () => {
        cy.get(homePage.AdviceBlock).scrollIntoView().should('be.visible')
            .within(() => {
                cy.get('button').contains("Let's talk")  // Button present
                    .parent('a[href]').should('have.attr', 'href','/contacts')
                    .click()
                cy.url().should('include', '/contacts')
            })
    })
})