angular
  .module('musicMaven')
    .directive('disableAnimation', function($animate){
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $attrs.$observe('disableAnimation', function(value){
                $animate.enabled(!value, $element);
            });
        }
    }
});angular
  .module('musicMaven')
    .directive('resize', function ($window) {
      return function (scope, element) {
        var w = angular.element($window);

        scope.getWindowDimensions = function () {

          if(w.height() < 650) {
            var windowHeight = 650;
          } else {
            var windowHeight = w.height();
          }     

          return { 'h': windowHeight, 'w': w.width(), 's': w.scrollTop()};
        };

        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
          scope.setHeightWidthAndPadding = function (percentage, paddingTopPercentage, paddingBottomPercentage, mobilePaddingPercentage) {

            if(newValue.w > 768) {
              mobilePaddingPercentage = 1;
            }

            return {
              'height': (newValue.h * percentage) + 'px',
              'width': (newValue.w) + 'px',
              'padding-top': (newValue.h * percentage * paddingTopPercentage * mobilePaddingPercentage) + 'px',
              'padding-bottom': (newValue.h * percentage * paddingBottomPercentage * mobilePaddingPercentage) + 'px',
              'min-height': (newValue.h * percentage) + 'px'
            };
          };
                
        }, true);
      
        w.bind('resize', function () {
          scope.$apply();
        });
      }
    });angular
  .module('musicMaven')
    .directive('showErrors', function($timeout) {
      return {
        restrict: 'A',
        require: '^form',
        link: function (scope, el, attrs, formCtrl) {
          // find the text box element, which has the 'name' attribute
          var inputEl   = el[0].querySelector("[name]");
          // convert the native text box element to an angular element
          var inputNgEl = angular.element(inputEl);
          // get the name on the text box
          var inputName = inputNgEl.attr('name');
          
          // only apply the has-error class after the user leaves the text box
          var blurred = false;
          inputNgEl.bind('blur', function() {
            blurred = true;
            el.toggleClass('has-error', formCtrl[inputName].$invalid);
          });
          
          scope.$watch(function() {
            return formCtrl[inputName].$invalid
          }, function(invalid) {
            // we only want to toggle the has-error class after the blur
            // event or if the control becomes valid
            if (!blurred && invalid) { return }
            el.toggleClass('has-error', invalid);
          });
          
          scope.$on('show-errors-check-validity', function() {
            el.toggleClass('has-error', formCtrl[inputName].$invalid);
          });
          
          scope.$on('show-errors-reset', function() {
            $timeout(function() {
              el.removeClass('has-error');
            }, 0, false);
          });
        }
      }
    });'use strict';

angular.module('musicMaven').factory('TextLookupService',
  function($http, $rootScope) {
    var Service = function() {};

    function getJsonFile(filename) {
      var request = {
        success: function() {},
        error: function() {
          console.log("Error While Retrieving JSON File: " + filename);
          return null;
        }
      };

      if (filename) {
        request = $http
          .get('json/' + filename)
          .success(function(data) {
            // return data;
          })
          .error(
            function(data) {
              console.log("Error While Retrieving JSON File: " + filename);
              return null;
            });
      }
      return request;
    }


    Service.getText = function(filename) {
      return getJsonFile(filename);
    };

    return Service;
  });'use strict';

angular.module('musicMaven').factory('DataService',
  function($http, $rootScope, $location) {
    var Service = function() {};

    function sendData(url, data) {
      var request = {
        success: function() {},
        error: function() {
          console.log("Error While Getting Data");
          return null;
        }
      }; 

      if (data === undefined) {
        data = {};
      }

      if (location.hostname.indexOf('www.') !== -1) {
        data.origin = location.hostname.replace('www.','');
      } else {
        data.origin = location.hostname;  
      }

      if (url) {
        request = $http({
          method  : "POST",
          url     : url,
          data    : $.param(data),
          headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
        }).success(function(data) {
            $rootScope.$broadcast('CONTACT_FORM_SUCCESS');
          })
          .error(
            function(data) {
              $rootScope.$broadcast('CONTACT_FORM_ERROR');
              console.log("Error While Getting Data");
              return null;
            });
      }
      return request;
    }

    Service.sendContactForm = function(data) {
      var url = SEND_CONTACT_FORM;
      return sendData(url, data);
    };


    return Service;
  });