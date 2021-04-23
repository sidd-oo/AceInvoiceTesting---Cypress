# AceInvoiceTesting-Cypress

This is a example project repository using the automation tool, [Cypress](https://www.cypress.io/). These tests are intended to do end to end testing for [AceInvoice](https://www.aceinvoice.com/). This testing project provide examples of common actions you may need in your testing.

## What you require to run Cypress on your Machine
1. [node](https://nodejs.org/en/)
1. [git](https://git-scm.com/)

## How to set up this project in your machine ?
1. Make a clone of this repository using git: `git clone https://github.com/sidd-oo/AceInvoiceTesting-Cypress.git`
2. Go inside the project direcory `cd AceInvoiceTesting-Cypress`
3. Installing all the dependencies using git: `npm install`

## How to run the test ?
1. Type `npm run e2e` on the terminal inside the `AceInvoiceTesting-Cypress` directory
2. A new Cypress window will pop up.
3. There you will find `aceinvoiceTesting.spec.js` file under `Tests` > `INTEGRATION TEST` foldeer.
4. Click on  this `aceinvoiceTesting.spec.js` and your test cases will start executing on the browser.

## The AceInvoice Challenge

1. Visit [AceInvoice Website](https://www.aceinvoice.com/)
2. Click on `Sign up for FREE`
3. email -> `sidd-oo-march-19-2021-2142-419@example.com`. Replace "march-19-2021-2142-419" with the current time when the script is running. The format is "month-DD-YYYY-HHMM-      mill". Here HH is in 24 hours format and mill are milliseconds
4. password -> `welcome1234!`
5. First Name -> `Oliver`
6. Last Name -> `Smith`
7. Select `GMT+ 5:30 New Delhi` from the dropdown
8. Select `DD/MM/YYY` as the date format
9. Check both the check boxes.
10. Click on `Continue`.
11. Name of your company. -> `sidd-oo Private Limited`
12. Click on `Continue`
13. Assert that the page has `Congratulations, you're all set!`
14. Click on `Continue`
15. Assert that the page has `Verification email sent to`
16. Click on `Clients` tab.
17. Click on `Add a new client`
18. Name -> `Trix Inc`
19. Click on `Submit` button
20. Assert that the page has `Add New Project`
21. Project Name -> `Trix Web Development`
22. Select `Hourly project rate`
23. Hourly project rate -> `20`
24. Hit `Submit`
25. Assert that the page has `Trix Web Development
26. Assert that the page has `Hourly Project Rate`
27. Assert that the page has `No rounding`
28. Assert that the page has `Oliver Smith`
29. Assert that the page has `$20`
