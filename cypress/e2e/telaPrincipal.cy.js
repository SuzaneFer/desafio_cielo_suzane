describe('Tela Inicial', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.intercept('GET', '**/buscar-dados', {
      statusCode: 200,
      body: {
        summary: {
          "totalQuantity": 1546,
          "totalAmount": 313388,
          "totalNetAmount": 301847.02,
          "totalAverageAmount": 202.71,
        },
        items: [{
            "id": "114606514478703",
            "cnpjRoot": 485116,
            "paymentType": "Crédito à vista",
            "cardBrand": "Mastercard",
            "channel": "Super Link / Digitada",
            "status": "Aprovada"
          }
        ],
      },
    }).as('getDataRequest');

    cy.visit('localhost:5173'); 
  });
  it('deve preencher o contexto com dados interceptados', () => {
    cy.wait('@getDataRequest').then(({ response }) => {
      response.body;
    });
  });
  it('deve renderizar corretamente os componentes', () => {
		cy.get('[data-cy="Início"]').should('have.text', 'Início');
    cy.get('[data-cy="Gráficos"]').should('have.text', 'Gráficos')
  });
  it('deve renderizar corretamente o card de informações', () => {
		cy.get('[data-cy="card-info"]').contains('Quantidade total');
  });
  it('deve renderizar corretamente a tabela', () => {
		cy.get('[data-cy="table"]').contains('Id');
  });
  it('deve testar o clique no botão de gráficos e a mudança de componentes', () => {
		cy.get('[data-cy="Gráficos"]').click();
    cy.get('[data-cy="graficos-page"]').contains('Gráfico de canais');
  });
});
