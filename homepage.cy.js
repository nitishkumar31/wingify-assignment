describe("Home Page", () => {
  beforeEach(() => {
    // Visiting the home page before each test case
    cy.visit("https://sakshingp.github.io/assignment/home.html");
  });

  it("Sorts transaction table in ascending order by amount", () => {
    // Checking that, while clicking 1st time on the "AMOUNT" header in the transaction table
    // the values are sorted in ascending order.
    cy.get("#amount").click();

    cy.get("#transactionsTable tbody tr td.text-right").each(
      ($row, index, $list) => {
        if (index < $list.length - 1) {
          const currentAmount = parseFloat(
            $row.text().replace(/[^0-9.-]+/g, "")
          );
          const nextAmount = parseFloat(
            $list
              .eq(index + 1)
              .text()
              .replace(/[^0-9.-]+/g, "")
          );
          // Verifying the current amount is less than or equal to the next amount
          expect(currentAmount).to.be.at.most(nextAmount);
        }
      }
    );
  });
});
