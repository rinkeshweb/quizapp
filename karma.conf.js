module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-jasmine-html-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    reporters: ['progress', 'kjhtml', 'coverage'],
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    client: {
      jasmine: {
        random: false
      },
      clearContext: false
    },
    files: [
      { pattern: 'src/assets/**/*', watched: false, included: false, served: true }
    ],
    proxies: {
      '/assets/': '/base/src/assets/'
    },
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox',
          '--disable-gpu',
          '--disable-dev-shm-usage',
          '--disable-setuid-sandbox'
        ]
      }
    },
    browsers: ['ChromeHeadlessCI'],
    singleRun: true,
    restartOnFileChange: false,
  });
};
