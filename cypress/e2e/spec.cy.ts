describe("read article", () => {
  it("user can filter by country and category, choose an article and be able to read it", () => {
    cy.visit("http://127.0.0.1:5173");

    let country = /united states of america/i;
    let category = /science/i;

    cy.get('[data-test="menu-btn"]').click();

    cy.findByRole("link", { name: /select region/i }).click();

    cy.findByRole("radio", { name: country }).click();

    cy.findByRole("link", { name: /update/i }).click();

    cy.findByRole("link", { name: category }).click();

    cy.get(".drawer-overlay").click();

    cy.get('[data-test="heading"]').contains(country).contains(category);

    let artTitle;
    cy.get(":nth-child(2) > .col-start-1 > .text-black").then(
      ($title) => (artTitle = $title.text())
    );

    cy.get(":nth-child(2) > .col-start-1 > .text-black").click();

    cy.get('[data-test="art-title"]').then(($title) => {
      expect($title.text()).to.eql(artTitle);
    });
  });
});
