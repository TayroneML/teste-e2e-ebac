import {faker} from'@faker-js/faker'

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('selecionarItemSelect', (seletorSelect, itemTextSelecionar) =>
{
    cy.get(seletorSelect).click()
    cy.get('.select2-search__field').click()
    cy.get('.select2-search__field').type(itemTextSelecionar)
    cy.get('.select2-search__field').type('{enter}')
})

Cypress.Commands.add('preencherDadosCheckOut', () => {
    cy.contains('Concluir compra').click()
    cy.get('#billing_first_name').clear().type(faker.person.firstName())
    cy.get('#billing_last_name').clear().type(faker.person.lastName())
    cy.get('#billing_company').clear().type('Ebac')
    cy.selecionarItemSelect('#select2-billing_country-container', 'Brasil')
    cy.get('#billing_address_1').clear().type('Rua')
    cy.get('#billing_address_2').clear().type('404')
    cy.get('#billing_city').clear().type('Caldas Novas')
    cy.selecionarItemSelect('#select2-billing_state-container', 'Goiás')
    cy.get('#billing_postcode').clear().type('75680-337')
    cy.get('#billing_phone').clear().type('(64)99275-4565')
    cy.get('#billing_email').clear().type(faker.internet.email())
    cy.get('#order_comments').clear().type('A casa é de esquina com portão branco')
    cy.contains('Pagamento na entrega').click()
    cy.get('#terms').check()
    cy.contains('Finalizar').click()
})