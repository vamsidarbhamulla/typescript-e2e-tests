// stressTest -
// Determine how to system will behave under extreme conditions
// This will be provide system stability and reliability
// How far we can push the application to see the breaking point

import { selectDestinationAndFlight } from "./blazeDemoMainScenario";

export const options = {
  vus: 1,
  duration: '10s',
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '2m', target: 100 }, // below normal load
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 }, //  normnal load
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 }, // around the breaking point
    { duration: '5m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '5m', target: 400 },
    { duration: '10m', target: 0 }, // scale down recovery stage
  ]
};

export default function main() {
  selectDestinationAndFlight()
}