// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const cucumber = require('cypress-cucumber-preprocessor').default;
// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const browserify = require('@cypress/browserify-preprocessor');

// eslint-disable-next-line @typescript-eslint/no-var-requires,import/no-extraneous-dependencies
const cypressTerminalReport = require('cypress-terminal-report/src/installLogsPrinter');

function setCucumberOptions(on: Cypress.PluginEvents) {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve('typescript')
  };

  on('file:preprocessor', cucumber(options));
}

function setReportOptions(on: Cypress.PluginEvents) {
  const installLogsPrinterOptions = {
    printLogsToConsole: 'onFail',
    includeSuccessfulHookLogs: true,
    logToFilesOnAfterRun: true,
    defaultTrimLength: 1600,
    commandTrimLength: 1600
  };
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  cypressTerminalReport(on, installLogsPrinterOptions);
}

function plugin(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
  setCucumberOptions(on);
  setReportOptions(on);

  // eslint-disable-next-line no-console
  console.log('config.env', config.env);

  return {
    ...config
  };
}

module.exports = plugin;
