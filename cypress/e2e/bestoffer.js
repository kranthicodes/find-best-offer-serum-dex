describe('Best offer module', () => {
  const user = cy;

  beforeEach(() => {
    user.visit('/');
    user.get('#react-select-2-input').click();
    user.findByText(/ETH\/USDT/i).click();
  })

  it('should get best bid offer of selected asset pair', () => {
    user.get('[value="Bid"]').check();
    user.findByText(/Submit/i).click();
    cy.findByTestId('offer-1', { timeout: 10000 }).should('exist');
  });

  it('should get best ask offer of selected asset pair', () => {
    user.get('[value="Ask"]').check();
    user.findByText(/Submit/i).click();
    cy.findByTestId('offer-1', { timeout: 10000 }).should('exist');
  });

  it('should get best bid and ask offer of selected asset pair', () => {
    user.get('[value="Bid"]').check();
    user.get('[value="Ask"]').check();
    user.findByText(/Submit/i).click();
    cy.findByTestId('offer-1', { timeout: 10000 }).should('exist');
    cy.findByTestId('offer-2', { timeout: 10000 }).should('exist');
  });

  it('should show error if there is error when fetching best offer', () => {
    user.intercept('POST', 'https://solana-api.projectserum.com', {
      statusCode: 500,
      body: {}
    });

    user.get('[value="Bid"]').check();
    user.get('[value="Ask"]').check();
    user.findByText(/Submit/i).click();
    cy.findByTestId('offer-error').should('exist');
  });

  it('should get best bid offer of selected asset pair with given asset size', () => {
    user.findByTestId('asset-size-input').clear().type("0.05");
    user.get('[value="Bid"]').check();
    user.findByText(/Submit/i).click();
    cy.findByTestId('offer-1', { timeout: 10000 }).should('exist');
  });

  it('should get best ask offer of selected asset pair with given asset size', () => {
    user.findByTestId('asset-size-input').clear().type("0.05");
    user.get('[value="Ask"]').check();
    user.findByText(/Submit/i).click();
    cy.findByTestId('offer-1', { timeout: 10000 }).should('exist');
  });

  it('should get best bid and ask offers of selected asset pair with given asset size', () => {
    user.findByTestId('asset-size-input').clear().type("0.05");
    user.get('[value="Bid"]').check();
    user.get('[value="Ask"]').check();
    user.findByText(/Submit/i).click();
    cy.findByTestId('offer-1', { timeout: 10000 }).should('exist');
    cy.findByTestId('offer-2', { timeout: 10000 }).should('exist');
  });
});
