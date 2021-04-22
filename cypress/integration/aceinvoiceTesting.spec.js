/// <reference types="cypress" />

describe("Ace Invoice Testing", () => {

  beforeEach(() => {
  cy.viewport(1280,720);
})
  it("1.Visiting Ace Invoice Website", () => {
    cy.viewport(1280,720)
    cy.visit("https://www.aceinvoice.com/");
  });

  it("2.Click on 'Sign up for FREE'", () => {
    cy.get('.nav-item > [href="https://app.aceinvoice.com/sign_up"]').click();
  });

  it("3.Entering Custom Email",()=>{
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour12:false
    };
    let today = new Date().toLocaleTimeString("en-us", options).split(",");
    let email = `surya-oo-${today[1].split(' ')[1]}-${today[1].split(' ')[2]}-${today[2].trim()}-${today[3].trim().replaceAll(":",'').substr(0,4)}-${today[3].trim().replaceAll(":",'').substr(4,)}-${new Date().getMilliseconds()}@example.com`;
    cy.get('[data-test-id="signup-email"]').type(email);
    cy.get('[data-test-id="signup-submit"]').click();
  });

  it("4.Enter Password",()=>{
    cy.get('[data-test-id="signup-password"]').type("welcome1234!");
    cy.get('[data-test-id="signup-continue"]').click();
  });

  it("5.First Name",()=>{
    cy.get('[data-test-id="introduction-first-name"]').type("Oliver");
  });

  it("6.Last Name",()=>{
    cy.get('[data-test-id="introduction-last-name"]').type("Smith");
  });

  it("7.Select 'GMT+ 5:30 New Delhi' from the dropdown",()=>{
    cy.get('select').select('(GMT+05:30) New Delhi').should('have.value', 'New Delhi')
  });

  it("8. Select 'DD/MM/YYY' as the date format",()=>{
    cy.contains("DD/MM/YYYY").click();
  });

  it("9. Check both the check boxes.",()=>{
    cy.contains("By checking you agree to ").click();
    cy.contains("Send me product updates, notifications, and other updates.").click();
  });

  it("10. Click on 'Continue'",()=>{
    cy.get('[data-test-id="introduction-submit"]').click();
  });

  it("11. Name of your company. -> 'sidd-oo Private Limited'",()=>{
    let companyName = "sidd-oo Private Limited";
    cy.get('[data-test-id="organization-name"]').type(companyName);
    cy.get('[data-test-id="organization-submit"]').click();
  });
  
  it("12. Click on 'Continue'",()=>{
    cy.get('[data-test-id="client-name"]').type("Oliver");
    cy.get('[data-test-id="client-secondary-name"]').type("Smith");
    // cy.get('[data-test-id="client-address-line-one"]').type("1159  Sunset Drive");
    // cy.get('[data-test-id="client-address-line-two"]').type("12th Parkinson Street");
    // cy.get('[data-test-id="client-address-city"]').type("Pine Bluff");
    // cy.get('[data-test-id="client-address-state"]').type("AR");
    // cy.get('[data-test-id="client-address-country"]').type("USA");
    // cy.get('[data-test-id="client-address-zipcode"]').type("71601");
    cy.get('[data-test-id="client-submit"]').click();
  });

  it("13. Assert that the page has 'Congratulations, you're all set!'",()=>{
    cy.contains("Congratulations, you're all set!").should("have.text","Congratulations, you're all set!");
  });

  it("14. Click on 'Continue'",()=>{
    cy.get('[data-test-id="onboarding-continue"]').click();
    // cy.contains("Continue").click();
  });
  
  it("15. Assert that the page has 'Verification email sent to'",()=>{
    cy.contains("Verification email sent to ");
  });

  // it("16. Click on 'Clients' tab.",()=>{
  //     cy.get('[data-test-id="header-clients"]').click();
  // });

  // it("17. Click on 'Add a new client'",()=>{

  // });

  // it("18. Name -> 'Trix Inc'",()=>{

  // });

  // it("19. Click on 'Submit' button",()=>{

  // });

  // it("20. Assert that the page has 'Add New Project'",()=>{

  // });

  // it("21. Project Name -> 'Trix Web Development'",()=>{

  // });

  // it("22. Select 'Hourly project rate'",()=>{

  // });

  // it("23. 'Hourly project rate' -> '20'",()=>{

  // });

  // it("24. Hit 'Submit'",()=>{

  // });

  // it("25. Assert that the page has 'Trix Web Development'",()=>{

  // });

  // it("26. Assert that the page has 'Hourly Project Rate'",()=>{

  // });

  // it("27. Assert that the page has 'No rounding'",()=>{

  // });

  // it("28. Assert that the page has 'Oliver Smith'",()=>{

  // });

  // it("29. Assert that the page has '$20'",()=>{

  // });


});

     
