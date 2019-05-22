describe("Cluster functionality test", function () {
  it("Add cluster button opens modal", function () {
    cy.visit("localhost:9000");
    cy.get("#add-cluster-btn").then(() => {
      cy.get("#add-cluster-btn")
        .first()
        .click();
    });
    cy.contains('Add Cluster')
  });
});
