#!/bin/sh -eu

pwd
cd /home/k6/tests/load

if [ $TEST_TYPE = fe ]
then
  ./home/k6/xk6-browser-linux run frontend/blazedemo-flight-destination-test.js
else
  k6 run backend/loadTest.js
fi