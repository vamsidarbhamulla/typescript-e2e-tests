// loadTest -
// Assess the current performance of the test under the typical and peak load
// Nice to add to CICD to check the system is continously meeting
// Usually simulate a normal business day load

import { selectDestinationAndFlight } from "./blazeDemoMainScenario.js";

export const options = {
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '10s', target: 1000 }, // simulate ramp-up of traffic from 1 to 1000 users over 10 sec
    { duration: '5s', target: 1000 },// stay at 1000 users for 15 sec
    { duration: '10s', target: 0 },  // ramp-down to 0 users in 10 sec
  ],
  thresholds: {
    http_req_failed: ['rate<1'], // http errors should be less than 1%
    http_req_duration: ['p(95)<8000'], // 95% of requests should be below 8 sec
  },
};

export default function main() {
  selectDestinationAndFlight()
}