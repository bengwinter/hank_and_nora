angular
  .module('hankNoraWedding')
    .directive('resize', function ($window) {
      return function (scope, element) {
        var w = angular.element($window);

        scope.getWindowDimensions = function () {
          return { 'h': w.height(), 'w': w.width(), 's': w.scrollTop()};
        };

        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
          scope.setHeight = function (offset) {
            var windowHeight = newValue.h - offset;
            var sectionHeight = element.height();
            var paddingHeight = ((windowHeight - sectionHeight)/2);

            return {
              'height': (windowHeight) + 'px',
              'padding-top': paddingHeight + 'px',
              'padding-bottom': paddingHeight + 'px'
            };
          };

          scope.setHeightNoPadding = function (offset) {
            var windowHeight = newValue.h - offset;
            var sectionHeight = element.height();
            var paddingHeight = ((windowHeight - sectionHeight)/2);

            return {
              'height': (windowHeight) + 'px'
            };
          };
                
        }, true);
      
        w.bind('resize', function () {
          scope.$apply();
        });
      }
    });