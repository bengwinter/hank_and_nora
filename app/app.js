'use strict';

angular
  .module('hankNoraWedding', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $httpProvider) {

    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
    $routeProvider
      .when('/', {
        templateUrl: 'home/sections/the_wedding.html',
        controller: 'HomeCtrl'
      }).when('/the_wedding', {
        templateUrl: 'home/sections/the_wedding.html',
        controller: 'HomeCtrl'
      }).when('/events', {
        templateUrl: 'home/sections/events.html',
        controller: 'HomeCtrl'
      }).when('/our_story', {
        templateUrl: 'home/sections/our_story.html',
        controller: 'HomeCtrl'
      }).when('/details', {
        templateUrl: 'home/sections/details.html',
        controller: 'HomeCtrl'
      }).when('/activities', {
        templateUrl: 'home/sections/activities.html',
        controller: 'HomeCtrl'
      }).when('/registry', {
        templateUrl: 'home/sections/registry.html',
        controller: 'HomeCtrl'
      }).when('/gallery', {
        templateUrl: 'home/sections/gallery.html',
        controller: 'HomeCtrl'
      }).when('/rsvp', {
        templateUrl: 'home/sections/rsvp.html',
        controller: 'HomeCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });