// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'dtm' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'dtm.services' is found in services.js
// 'dtm.controllers' is found in controllers.js
angular.module('dtm', ['ionic', 'dtm.controllers', 'dtm.services', 'dtm.authenticate', 'dtm.profiles', 'dtm.medicines', 'firebase', 'ngCordova'])

.run(function($ionicPlatform, Authenticate) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    Authenticate.isAuthenticate();
  });
})
.constant('FURL', 'https://donatusmedicamentos.firebaseio.com/')
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('init', {
      url: '/init',
      templateUrl: 'templates/authenticate/init.html',
      controller: 'InitController as init'
    })
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/medicines/list.html',
        controller: 'ListController as md'
      }
    }
  })

  .state('tab.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'templates/profiles/profile.html',
          controller: 'ProfileController as p'
        }
      }
    })
    .state('tab.upload', {
        url: '/upload',
        views: {
          'tab-upload': {
            templateUrl: 'templates/medicines/upload.html',
            controller: 'UploadController as up'
          }
        }
      })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/init');

});
