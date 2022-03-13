// @ts-ignore
import launcher from "k6/x/browser";

//command to run this script: ./xk6-browser run blazedemo-flight-destination-test.js 2>&1 1>../loadTestResults/fe-load-test-results-flight-destination.log

export const options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        { duration: '10s', target: 10 }, // simulate ramp-up of traffic from 1 to 10 users over 10 sec
        { duration: '5s', target: 10 },// stay at 10 users for 5 sec
        { duration: '10s', target: 0 },  // ramp-down to 0 users in 10 sec
    ]
};

export default function() {
    const browser = launcher.launch('chromium', {
        headless: false,
        args: ['--disable-web-security', '--allow-running-insecure-content',
            '--ignore-certificate-errors', '--ignore-certificate-errors-spki-list ',
            '--disable-setuid-sandbox', '--no-sandbox', '--incognito','--disable-gpu',  '--enable-features=NetworkService'],

        debug: true,
        devTools: true,
        env: {},
    });
    const context = browser.newContext({
        bypassCSP: true,
        ignoreHTTPSErrors: true,
    });
    const page = context.newPage();

    // Goto destination selection page, find login link and click it
    page.goto('http://blazedemo.com/index.php', { waitUntil: 'networkidle' });

    page.screenshot({path: '../loadTestResults/screenshots/1_destination_selection.png'});
    page.selectOption('select[name="fromPort"]', 'San Diego');
    page.selectOption('select[name="toPort"]', 'Berlin');
    page.click('.btn.btn-primary');

    // Wait for next page to load
    page.waitForLoadState('networkidle');
    page.screenshot({path: '../loadTestResults/screenshots/2_destination_to_flight_selection.png'});

    page.close();
    browser.close();
}
