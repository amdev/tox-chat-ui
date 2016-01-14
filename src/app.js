'use strict';

/**
 * @ngInject
 */

var appName = 'tox-chat-app';
var angular = require('angular');

window.SockJS = require('sockjs-client');
window.Stomp = require('stompjs/lib/stomp.min').Stomp;

require('angular-resource');
require('angular-ui-router');
require('mi-angular-chat');

var requires = [
  'ngResource',
  'ui.router',
  'mi.Chat',
  require('./components').name
];

angular.module(appName, requires)

  // redirect for unknown routes ///////////////////////////////////////////////////////////////////////////////////////
  .config(function ($urlRouterProvider, $locationProvider, $resourceProvider, $httpProvider) {
    $urlRouterProvider.otherwise(function ($injector) {
      var $state;
      $state = $injector.get('$state');
      $state.go('app.management.chat');
    });
    //$httpProvider.interceptors.push('ResponseErrorInterceptor');
    $resourceProvider.defaults.stripTrailingSlashes = true;
  })

;

angular.bootstrap(document, [appName]);
