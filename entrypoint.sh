#!/bin/sh -eu

pwd
cd /tests
yarn install

if [ $TEST_TYPE = ui ]
then
  npx cypress run --reporter mocha-multi-reporters --reporter-options configFile=reporterconfig.js
else
  npx ts-mocha --paths --timeout 5000 "./api/**/*.api.spec.ts" --reporter mocha-multi-reporters --reporter-options configFile=reporterconfig.js
fi

npm run posttest