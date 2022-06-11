/// <reference types="cypress" />

describe('home.cy.js', () => {
  beforeEach(() => {
    cy.visit('https://www.moladin.com')
  })

  it('should direct to home page', () => {
    cy.get('.homepage-carousel')
  })

  it('should go to beli mobil bekas page', () => {
    cy.get('.menu-nav a[href*="beli-mobil-bekas"]').should('contain', 'Beli Mobil').click({force: true})
    cy.url().should('include', '/beli-mobil-bekas')
  })

  it('should go to jual mobil bekas page', () => {
    cy.get('.menu-nav a[href*="jual-mobil-bekas"]').should('contain', 'Jual Mobil').click({force: true})
    cy.url().should('include', '/jual-mobil-bekas')
  })

  it('should see financing section', () => {
    cy.get('.section-financing').should('contain', 'Beli mobil lebih mudah dengan pembayaran Kredit!')
  })

  it('should go to financing mobil page', () => {
    cy.get('.section-financing').should('contain', 'Beli mobil lebih mudah dengan pembayaran Kredit!')
    cy.get('.financing').should('contain', 'Cari Mobil').click()
    cy.url().should('include', 'beli-mobil-bekas?payment=financing')
  })

  it('should see mitra section', () => {
    cy.get('.mitra').should('contain', 'Mitra Terpercaya Moladin')
  })

  it('should see testimoni section', () => {
    cy.get('.testimoni-section').should('contain', 'Cerita Pelanggan Moladin')
  })

  it('should see artikel section', () => {
    cy.get('.artikel-section').should('contain', 'Artikel dan Berita Terbaru')
  })

  it('should see faq section', () => {
    cy.get('.question-section').should('contain', 'Mereka Sering Tanya')
  })
})

