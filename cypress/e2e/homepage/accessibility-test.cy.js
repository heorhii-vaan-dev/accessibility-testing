/// <reference types="cypress" />

import {containerTester} from "../../utils/handlers";

describe('Accessibility Test - Homepage', () => {
    beforeEach(() => {
        cy.visit('https://www.zulaykitchen.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=143881142510');
        cy.injectAxe()
    })
    it('Hero Section', () => {
        containerTester(`#shopify-section-template--18276959158510__hero_C4QDCj`)
    })
    it('Marquee', () => {
        containerTester(`#shopify-section-template--18276959158510__marquee_aVN8Gg`)
    });
    it('Reviews Section', () => {
        containerTester(`#shopify-section-template--18276959158510__reviews_ChQYQa`)
    })
    it('Content Cards Slider', () => {
        containerTester(`#shopify-section-template--18276959158510__featured_content_YaJWkx`)
    })
})

