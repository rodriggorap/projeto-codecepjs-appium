const server = require("./server/server")

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: 'C:\\Users\\USUARIO1\\Downloads\\appsqazando\\app-release.apk',
      platform: 'Android',
      desiredCapabilities: {
        appPackege: 'com.gazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'pixel',
        platformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    login_page: './pages/login_page.js',
    home_page: './pages/home_page.js'
  },
  mocha: {},
  bootstrap: async () => {
    await server.start();
  },
  timeout: null,
  teardown: async () => {
    await server.stop();
  },
  hooks: [],
  // gherkin: {
  //   features: './features/*.feature',
  //   steps: ['./step_definitions/steps.js']
  // },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'cursoAutomacaoMobile',
  tests: './steps/*_test.js'
}