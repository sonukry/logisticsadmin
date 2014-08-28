'use strict';

angular.module('angularPassportApp')
  .controller('NewVehicleCtrl', function ($scope, $location, $cookieStore, Fleets) {
        
    Fleets.get()
    .success(function(data) {
      $scope.fleets = data;
      
      $scope.currentFleet = $cookieStore.get('fleetId');
      $scope.currentFleetName = $cookieStore.get('fleetName');
    })
    .error(function(data) {});
    
    $scope.vehicle = {};
    
    $scope.createVehicle = function() {
      
      Fleets.addVehicle($scope.currentFleet, {vehicle: $scope.vehicle})
      .success(function(data) {
        $location.path('/fleets');
      })
      .error(function(data) {
        alert('Operation Failed');
      });
      
    };
    
  });
