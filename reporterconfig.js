const testType = process.env.TEST_TYPE || 'ui';

module.exports = {
  reporterEnabled: 'spec, mocha-junit-reporter, mochawesome',
  mochawesomeReporterOptions: {
    reportDir: `./reports/mocha/${testType}`,
    overwrite: false,
    html: false,
    json: true,
    timestamp: 'mmddyyyy_HHMMss'
  },
  mochaJunitReporterReporterOptions: {
    mochaFile: `./reports/junit/${testType}/results-[hash].xml`,
    properties: {
      TEST_TYPE: `${testType}`
    }
  },
  toConsole: true
};
