import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('que hoje é quarta-feira', () => {
  cy.visit('http://localhost:8080')
})
