/// <reference types="cypress" />

describe('spec.cy.js', () => {
  beforeEach(() => {
    cy.visit('https://www.moladin.com')
  })

  it('should direct to home page', () => {
    cy.get('.menu-nav a').should('contain', 'Home')
  })

  it('should go to beli mobil bekas page', () => {
    cy.get('.beli #link').should('contain', 'Lebih Lanjut').click()
    cy.url().should('include', '/beli-mobil-bekas')
  })

  it('should go to jual mobil bekas page', () => {
    cy.get('.jual #link').should('contain', 'Lebih Lanjut').click()
    cy.url().should('include', '/jual-mobil-bekas')
  })

  it('should see benefit section', () => {
    cy.get('.benefit-section').should('contain', 'Apa saja keuntungan yang Anda dapatkan dengan menggunakan Moladin?')
    cy.expect('.card-keuntungan').to.have.length(16)
  })

  it('should see recommended section', () => {
    cy.get('.rekomendasi-section').should('contain', 'Rekomendasi Mobil')
  })

  it('should go to rekomendasi mobil page', () => {
    cy.get('.rekomendasi-section').should('contain', 'Rekomendasi Mobil')
    cy.get('.rekomendasi #link').should('contain', 'Lihat Semua Mobil').click()
    cy.url().should('include', '/beli-mobil-bekas')
    cy.get('#container-b2c-beli-mobil-bekas').should('contain', 'Rekomendasi')
  })

  // it('should go to car listing page when user click one of them', () => {
  //   cy.get('.rekomendasi-section').should('contain', 'Rekomendasi Mobil')
  //   cy.get('.rekomendasi-section product-name').should('contain', 'TOYOTA RUSH').click()
  //   cy.get('.title-car').should('contain', 'TOYOTA RUSH')
  // })

  it('should see how it works section', () => {
    cy.get('.how-work-section').should('contain', 'Bagaimana cara kerja Moladin?')
    cy.get('.how-work').should('contain', 'Beli Mobil Bekas').click()
    cy.get('.how-work button').should('contain', 'Beli Mobil Bekas').should('have.class', 'btn btn-primary')
  })
})

