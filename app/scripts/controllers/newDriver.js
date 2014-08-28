'use strict';

angular.module('angularPassportApp')
  .controller('NewDriverCtrl', function ($scope, $location, $cookieStore, Fleets) {
    
    Fleets.get()
    .success(function(data) {
      $scope.fleets = data;
      
      $scope.currentFleet = $cookieStore.get('fleetId');
      $scope.currentFleetName = $cookieStore.get('fleetName');
    })
    .error(function(data) {});
    
    $scope.driver = {};
    
    $scope.createDriver = function() {
      
      Fleets.addDriver($scope.currentFleet, {driver: $scope.driver})
      .success(function(data) {
        $location.path('/fleets');
      })
      .error(function(data) {
        alert('Operation Failed');
      });
      
    };
    
  });
