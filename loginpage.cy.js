describe("Login Page", () => {
  beforeEach(() => {
    // Visiting the login page before each test case
    cy.visit("https://sakshingp.github.io/assignment/login.html");
  });

  it("should login with valid credentials", () => {
    // Putting the valid username and password
    cy.get("#username").type("nitish");
    cy.get("#password").type("Nitish@123");
    cy.get(".form-check-input").check();
    cy.get("#log-in").click();

    // Asserting that the user is logged in successfully
    cy.url().should(
      "include",
      "https://sakshingp.github.io/assignment/home.html"
    );
  });
});
