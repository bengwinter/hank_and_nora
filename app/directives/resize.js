angular
  .module('hankNoraWedding')
    .directive('resize', function ($window) {
      return function (scope, element) {
        var w = angular.element($window);

        scope.getWindowDimensions = function () {
          return { 'h': w.height(), 'w': w.width(), 's': w.scrollTop()};
        };

        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
          scope.setHeight = function (offset, paddingPercentage) {
            if(newValue.h > 500) {
              var windowHeight = (newValue.h - offset);
            } else {
              var windowHeight = (500 - offset);
            }

            return {
              'min-height': (windowHeight) + 'px',
              'padding-top': (windowHeight * paddingPercentage) + 'px',
              'padding-bottom': (windowHeight * paddingPercentage) + 'px'
            };
          };
                
        }, true);
      
        w.bind('resize', function () {
          scope.$apply();
        });
      }
    });