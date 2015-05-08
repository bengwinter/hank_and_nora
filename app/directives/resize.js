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

            var paddingHeight = ((windowHeight - element.height())/2);

            return {
              'height': (windowHeight) + 'px',
              'padding-top': paddingHeight + 'px',
              'padding-bottom': paddingHeight + 'px'
            };
          };
                
        }, true);
      
        w.bind('resize', function () {
          scope.$apply();
        });
      }
    });