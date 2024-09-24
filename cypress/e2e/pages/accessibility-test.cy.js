/// <reference types="cypress" />

import {containerTester} from "../../utils/handlers";

describe('Accessibility Test - Pages', () => {
    it('Warranty Registration', () => {
        cy.visit('https://www.zulaykitchen.com/pages/warranty?_ab=0&_fd=0&_sc=1&preview_theme_id=143881142510');
        cy.injectAxe()
        containerTester(`#main-content`)
    })
})

