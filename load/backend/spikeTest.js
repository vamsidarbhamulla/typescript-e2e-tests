// spikeTest - Variation of a stress test where we increase the load in a short moment instead of gradual increase in stressTest
// Determine how to system will behave under extreme conditions to understand the system stability and reliability
// How far we can push the application to keep it still working

import { selectDestinationAndFlight } from "./blazeDemoMainScenario";

export const options = {
  vus: 1,
  duration: '10s',
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '10s', target: 100 }, // below normal load
    { duration: '1m', target: 100 },
    { duration: '10s', target: 1400 }, //  spike to 1400 users load
    { duration: '3m', target: 1400 }, // stay at 1400 for 3 min
    { duration: '10s', target: 100 }, // scale down recovery stage
    { duration: '3m', target: 100 },
    { duration: '10s', target: 0 },
  ]
};

export default function main() {
  selectDestinationAndFlight()
}