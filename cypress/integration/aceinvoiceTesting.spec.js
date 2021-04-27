 /// <reference types="cypress" />

describe("BigBinary Testing Challenge", () => {
    before(() => {
    cy.viewport(1280,720);
    Cypress.Cookies.preserveOnce();
})

it("AceInvoice Testing", () => {
    cy.log("Visit https://www.aceinvoice.com/");
    cy.visit("https://www.aceinvoice.com/");

    
    cy.log("Click on 'Sign up for FREE'");
    cy.get('.nav-item > [href="https://app.aceinvoice.com/sign_up"]').click();
  
    cy.log('Enter your customised email');
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour12:false
    };
    let today = new Date().toLocaleTimeString("en-us", options).split(",");
    let email = `sidd-oo-${today[1].split(' ')[1]}-${today[1].split(' ')[2]}-${today[2].trim()}-${today[3].trim().replaceAll(":",'').substr(0,4)}-${today[3].trim().replaceAll(":",'').substr(4,)}-${new Date().getMilliseconds()}@example.com`;
    cy.get('[data-test-id="signup-email"]').type(email);
    cy.get('[data-test-id="signup-submit"]').click();
  
    cy.log('Password -> "welcome1234!"');
    cy.get('[data-test-id="signup-password"]').type("welcome1234!");
    cy.get('[data-test-id="signup-continue"]').click();
  
    cy.log('First Name -> "Oliver"');
    cy.get('[data-test-id="introduction-first-name"]').type("Oliver");
  
    cy.log('Last Name -> "Smith"');
    cy.get('[data-test-id="introduction-last-name"]').type("Smith");
  
    cy.log('Select "GMT+ 5:30 New Delhi" from the dropdown"');
    cy.get('select').select('(GMT+05:30) New Delhi').should('have.value', 'New Delhi')
  
    cy.log('Select "DD/MM/YYY" as the date format');
    cy.contains("DD/MM/YYYY").click();
    
    cy.log('Check both the check boxes.');
    cy.contains("By checking you agree to ").click();
    cy.contains("Send me product updates, notifications, and other updates.").click();
  
    cy.log('Click on "Continue".');
    cy.get('[data-test-id="introduction-submit"]').click();
  
    cy.log('Name of your company. -> "sidd-ood Private Limited".');
    let companyName = "sidd-oo Private Limited";
    cy.get('[data-test-id="organization-name"]').type(companyName);
    cy.get('[data-test-id="organization-submit"]').click();

    cy.log('Click on "Continue".');
    cy.get('[data-test-id="client-name"]').type("Oliver");
    cy.get('[data-test-id="client-secondary-name"]').type("Smith");
    cy.get('[data-test-id="client-submit"]').click();

    cy.log('Assert that the page has "Congratulations, youre all set!"');
    cy.contains("Congratulations, you're all set!").should("have.text","Congratulations, you're all set!");
  
    cy.log('Click on "Continue"');
    cy.get('button.btn.btn-primary[data-test-id="onboarding-continue"]').click();
    
    cy.log('Assert that the page has "Verification email sent to"');
    cy.get('div.header > div.verification-banner.py-2').contains("Verification email sent to").should('exist');

    cy.log('Click on "Clients" tab.');
    cy.get('[data-test-id="header-clients"]').click();

    cy.log('Click on "Add a new client"');
    cy.get('[data-test-id="client-add-new"]').click();

    cy.log('Name -> "Trix Inc"');
    cy.get('[data-test-id="client-name"]').type("Trix Inc");

    cy.log('Click on "Submit" button');
    cy.get('[data-test-id="client-submit"]').click();

    cy.log('Assert that the page has "Add New Project"');
    cy.get('[data-test-id="project-add-new"]').contains("Add New Project").should("exist");

    cy.log('Project Name -> "Trix Web Development"');
    cy.get('[data-test-id="project-name"]').type("Trix Web Development");

    cy.log('Select "Hourly project rate"');
    cy.get('[data-test-id="project-billing-method"]').select('hourly_project_rate');

    cy.log('"Hourly project rate" -> "20"');
    cy.get('[data-test-id="project-rate"]').clear().type("20");

    cy.log('Hit "Submit"');
    cy.get('[data-test-id="project-save"]').click();

    cy.log('Assert that the page has "Trix Web Development"');
    cy.get('.field-value[data-test-id="project-name"]').should("have.text","Trix Web Development");

    cy.log('Assert that the page has "Hourly Project Rate"');
    cy.get('[data-test-id="project-billing-method"]').should("have.text","Hourly Project Rate");

    cy.log('Assert that the page has "No rounding"');
    cy.get('.field-value.white-space-pre-wrap.text-break > span').eq(0).should("have.text","No rounding ");

    cy.log('Assert that the page has "Oliver Smith"');
    cy.get('[data-test-id="project-team-member-table-name-1"]').should("have.text","Oliver Smith");

    cy.log('Assert that the page has "$20"');
    cy.get('[data-test-id="project-hourly-rate"]').should("exist","$20");

  });

});
