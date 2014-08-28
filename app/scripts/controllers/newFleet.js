'use strict';

angular.module('angularPassportApp')
  .controller('NewFleetCtrl', function ($scope, $location, Fleets) {
    
    $scope.fleet = {};
    
    $scope.createFleet = function() {
      
      Fleets.post({fleet: $scope.fleet})
      .success(function(data) {
        $location.path('/fleets');
      })
      .error(function(data) {});
      
    };
    
    
  });
