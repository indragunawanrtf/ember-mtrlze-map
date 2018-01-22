'use strict';

module.exports = function(environment) {

  let ENV = {
    modulePrefix: 'ember-mtrlze-map',
    environment,
    rootURL: '/',
    locationType: 'auto',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      'g-map': {
        libraries: ['places'],
        key: 'AIzaSyD3LdqCOSw0sp8OEKJkWcDZGrk34Jx3CFI'
      }
    }
  };

  ENV.contentSecurityPolicy = {
    'script-src': "'self' 'unsafe-eval' https://*.googleapis.com https://maps.gstatic.com",
    'img-src': "'self' https://*.googleapis.com https://*.gstatic.com",
    'font-src': "'self' https://*.gstatic.com",
    'style-src': "'self' 'unsafe-inline' https://*.googleapis.com"
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
