# Demo-e2e-tests

Demo code example for a full flege test setup using javascript/typescript + nodejs/npm/yarn based test libraries.

This document provides information from technical perspective.
For functional implementation details please refer:  [TESTS_FLOW.md](TESTS_FLOW.md)

## setup
```shell
npm install
```

## lint check
```shell
npm run prettier-check
```

## code format
```shell
npm run prettier-format
```

## ui-tests 
### dependencies - cypress, typescripts, bdd, cucumber

### run ui tests
```shell
npm run ui-test
```


## api-tests 
### dependencies -  ts-mocha, chai, axios

### run api tests
```shell
npm run api-test
```

## load-tests
### dependencies -  k6, xk6-browser
#### dependencies install steps 
##### k6: https://k6.io/docs/getting-started/installation/
##### xk6-browser: https://github.com/grafana/xk6-browser/releases


### run load tests - backend
```shell
k6 run loadTest.js 2>&1 1>../loadTestResults/be-load-test-results.log
```

### run load tests - frontend
```shell
./xk6-browser run blazedemo-flight-destination-test.js 2>&1 1>../loadTestResults/fe-load-test-results-flight-destination.log
./xk6-browser run blazedemo-flight-selection-test.js 2>&1 1>../loadTestResults/fe-load-test-results-flight-selection.log
```

## run ci
This will run tests (i.e api, ui and load tests) in 3 different docker containers parallel
```shell
docker-compose up --build --force-recreate
docker-compose down
```

## test results
### UI & API Test results available under reports/mocha/report.html
```shell
# mac 
open ./reports/mocha/report.html
# windows 
# need to manually open the file 
```

### load test results available ./load/loadTestResults
```shell
# mac
open ./load/loadTestResults be-load-test-results.log
# windows 
# need to manually open the file 
```

## load test metrics dashboard
To see the tests results while the tests are running 
we should start the metrics dashboard using the grafana
that reads data from influxdb which will be provided by the tests realtime
```shell
docker-compose -f load-tests-dashboard.yml up
```

To open the grafana dashboard use the below url: 
```shell
http://localhost:3000/d/k6/k6-load-testing-results
```

## Video Demonstration: 
1. [Intro-Api-Ui-Demo-5min](https://www.loom.com/share/669921234432480caf5ae139b54ccd58)
2. [Final-Load-test-Demo-5min](https://www.loom.com/share/faae0a6f715b407aaf10a7427ef2a5b8)
