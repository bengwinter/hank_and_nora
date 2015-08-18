'use strict';

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


    

    

    


    