// @ts-ignore
import launcher from "k6/x/browser";

//command to run this script: ./xk6-browser run blazedemo-flight-selection-test.js 2>&1 1>../loadTestResults/fe-load-test-results-flight-selection.log

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

    // Goto flight reserve page, select flight link and click it
    page.goto('http://blazedemo.com/reserve.php', { waitUntil: 'networkidle' });
    page.screenshot({path: '../loadTestResults/screenshots/3_flight_selection.png'});
    page.click('form[name="L4346"]');
    page.waitForLoadState('networkidle');
    page.screenshot({path: '../loadTestResults/screenshots/4_flight_selection_to_payment.png'});
    page.close();
    browser.close();
}
