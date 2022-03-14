// soakTest - Validate reliability of a system over long period to determine memory leaks kind of problems

import { selectDestinationAndFlight } from "./blazeDemoMainScenario.js";

export const options = {
  // vus: 1,
  insecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '2m', target: 800 }, // simulate ramp-up of traffic from 400 users over 2 min
    { duration: '3h56m', target: 800 },// stay at 800 users for 4 hrs
    { duration: '2m', target: 0 },  // ramp-down to 0 users in 2 min
  ]
};

export default function main() {
  selectDestinationAndFlight()
}