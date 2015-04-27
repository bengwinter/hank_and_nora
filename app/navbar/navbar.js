'use strict';

angular
  .module('hankNoraWedding')    
    .controller('NavbarCtrl', function ($scope, $routeParams, $rootScope, TextLookupService, $location, $window) {
      

      $scope.isActive = function (viewLocation) {
        var viewLocationString = viewLocation.substring(1);  
        return viewLocationString === $location.path();
      };


    });
