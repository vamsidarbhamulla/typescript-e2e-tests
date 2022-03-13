# Tests flow 

This document provides information from function/non-functional perspective.
For technical implementation details please refer:  [README.md](README.md)

## UI tests
### SUT (system under test): 
https://practice.automationbro.com/ - demo-ecommerce-website

### Test Scenarios

1. [search-for-an-item](./cypress/integration/searchForAnItem.feature)
2. [file-upload](./cypress/integration/fileUpload.feature)
3. [contact](./cypress/integration/contact.feature)
4. [negative-scenario-go-to-Line13](./cypress/integration/fileUpload.feature)

### UI BUG Ticket: 
User login feature : [UI-BUG-TICKET](./cypress/fixtures/ui-bug-ticket.md)

### Test Results
1. [UI-Test-Results-HTML](./reports/mocha/report.html)
2. [UI-Test-Results-JSON](./reports/mocha/report.json)

## API tests
### SUT (system under test):
https://reqres.in/

### Test Scenarios

1. User Authentication (Basic Auth) [auth-testcases](./api/auth/post.loginUser.api.spec.ts)
2. Different HTTP Status  [http-status-testcases](./api/httpStatus/httpStatus.api.spec.ts)
3. Different HTTP Methods : 
   1. [http-get-testcases](./api/httpMethods/get.getUsers.api.spec.ts)
   2. [http-post-testcases](./api/httpMethods/post.createUser.api.spec.ts)
   3. [http-put-testcases](./api/httpMethods/put.updateUser.api.spec.ts)
   4. [http-patch-testcases](./api/httpMethods/patch.updateUser.api.spec.ts)
   5. [http-delete-testcases](./api/httpMethods/delete.deleteUser.api.spec.ts)
4. Http Error code tests [http-error-status-testcases](./api/httpMethods/post.registerUser.api.spec.ts)

### API BUG Ticket:
For details : [API-BUG-TICKET](./api/api-bug-ticket.md)

### Test Results
1. [API-Test-Results-HTML](./reports/mocha/report.html)
2. [API-Test-Results-JSON](./reports/mocha/report.json)

## Load tests
### SUT (system under test):
https://blazedemo.com/
A simple flight booking userinterface 

### Test Scenarios
Scenario Description: 
Selecting a specific destination city on home page and then select the specific flight to see the payment page
1. Load test to simulate 1000 users on home page in 15 sec
   1. Backend 
      1. [backend-load-testcase](./load/backend/loadTest.js) (current-scope)
      2. [backend-stress-testcase](./load/backend/stressTest.js)
      3. [backend-spike-testcase](./load/backend/spikeTest.js)
      4. [backend-soak-testcase](./load/backend/soakTest.js)
   2. Frontend - 
      1. flight selection page [frontend-flight-selection-testcase](./load/frontend/blazedemo-flight-selection-test.js) 
      2. flight destination page [frontend-flight-destination-testcase](./load/frontend/blazedemo-flight-destination-test.js)

For frontend client metrics tests currently added options only to run with 10 vus as each added virtual user will spin up a new browser to collect the metrics and my individual machine is not capable to handle 1000 chrome instances load at the same time

### Test Results:
1. Backend results:
   1. Before Actual Load test of 1000 users in 15 sec [100-users-for-5mins](./load/loadTestResults/be-load-test-results-before.log)
   2. Actual Load test of 1000 users in 15 sec [1000-users-for-15sec](./load/loadTestResults/be-load-test-results.log)
   3. CI Threshold failure req duration p95>8sec for the Load test of 1000 users in 15 sec [1000-users-for-15sec-failed-threshold](./load/loadTestResults/be-load-req_duration-failed-on-ci-result.log)
2. Frontend results:
   1. flight selection page [frontend-flight-selection-testcase](./load/loadTestResults/fe-load-test-results-flight-selection.log)
   2. flight destination page [frontend-flight-destination-testcase](./load/loadTestResults/fe-load-test-results-flight-destination.log)
   3. frontend results can collect screenshots at specific stages to see if the user interactionis going as expected
      1. [1_destination_selection.png](./load/loadTestResults/screenshots/1_destination_selection.png)
      2. [2_destination_to_flight_selection.png](./load/loadTestResults/screenshots/2_destination_to_flight_selection.png)
      3. [3_flight_selection.png](./load/loadTestResults/screenshots/3_flight_selection.png)
      4. [4_flight_selection_to_payment.png](./load/loadTestResults/screenshots/4_flight_selection_to_payment.png)


### Metrics Dashboard
![Alt text](load/loadTestResults/screenshots/grafana-dashboard.png?raw=true "registration-api-error.png")



