/// <reference types="cypress" />

import {containerTester} from "../../utils/handlers";

describe('Accessibility Test - Collection', () => {
    beforeEach(() => {
        cy.visit('https://www.zulaykitchen.com/collections/all-products?_ab=0&_fd=0&_sc=1&preview_theme_id=143881142510');
        cy.injectAxe()
    })
    it('Main Content', () => {
        containerTester(`#main-content`)
    })

})

