var GA_CODE = '';
var DOMAIN = 'http://sendgrid-ben-site.herokuapp.com';
var SEND_CONTACT_FORM = DOMAIN + '/mail_july_camp';'use strict';

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
        templateUrl: 'home/sections/landing.html',
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
  });'use strict';

angular
  .module('hankNoraWedding')
    .controller('HomeCtrl', function ($scope, $rootScope) {


      $scope.activities = {
        "food": ["Wilawai’s kitchen in Montpelier", "The Skinny Pancake in Montpelier", "Ali Baba’s Kababs in Burlington",],
        "drink": ["Lost Nation Brewery in Morrisville", "Crop Brewery in Stowe", "Hill Farmstead Brewery in Greensborro"],
        "tours": ["Shelburne Museum in Shelburne (burlington area)", "Ben and Jerry’s in Waterbury", "Vermont Ski Museum in Stowe"],
        "outdoors": ["Mt. Mansfield (full hike or gondola + hike) in Stowe", "Green Mountain Reservoir in Morrisville", "Mt. Elmore (fire tower at the top) in Elmore"]
      };

      $scope.selectedCategory = $scope.activities['food'];

      $scope.changeActivity = function(category, $event) {
        $scope.selectedCategory = $scope.activities[category];
        $($event.target.parentElement.parentElement).find("p").removeClass("selected-category")
        $event.target.className = "selected-category";
      };
      
    });


    

    

    


    'use strict';

angular
  .module('hankNoraWedding')    
    .controller('NavbarCtrl', function ($scope, $routeParams, $rootScope, TextLookupService, $location, $window) {
      

      $scope.isActive = function (viewLocation) {
        var viewLocationString = viewLocation.substring(1);  
        return viewLocationString === $location.path();
      };


    });
