#Incubyte-Cypress

This project contains an automated end-to-end test suite for the Incubyte assessment task.

Automates the **Signup** and **Login** flow test cases using Cypress with BDD syntax.  
Tests are executed on the [Magento demo website](https://magento.softwaretestingboard.com).


# Tech-Stack

- **Cypress** – JavaScript end-to-end test framework  
- **Cucumber** – Gherkin-style BDD syntax via `@badeball/cypress-cucumber-preprocessor`
- **Page Object Model (POM)** – For modularity and reusability


# Project Structure

incubyte-cypress/
├── cypress/
│ ├── e2e/
│ │ ├── features/ # Gherkin .feature files and step_definitions
│ │ ├── page_objects/ # POM for signup and login
│ |
| |── fixtures # test data 
| |
│ ├── support/
│ │ ├── commands.js # Custom Cypress commands
│ │ └── e2e.js # Support config
| | └──utils/ # utility and helper functions
├── cypress.config.js # Cypress config
├── package.json
└── README.md


# Installation and setup

```bash
git clone https://github.com/aryanyaclav/incubyte-cypress.git
cd incubyte-cypress

npm install

npx cypress run


# Future milestones

CI/CD Integration
Integrate the test suite with GitHub Actions for automated test execution on every merge.

Test Reporting Dashboard
Create a dedicated dashboard (custom UI) to showcase detailed test reports and execution trends.

Detailed Logs and Reports
Generate structured logs and store detailed HTML/JSON reports for better debugging and traceability.

