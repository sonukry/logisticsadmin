'use strict';

angular.module('angularPassportApp')
  .controller('NewVehicleCtrl', function ($scope, $location, $cookieStore, Fleets) {
        
    $scope.currentFleet = $cookieStore.get('fleetId');
    $scope.currentFleetName = $cookieStore.get('fleetName');
    
    $scope.vehicle = {};
    
    $scope.createVehicle = function() {
      
      $scope.vehicle.device = {
        _id: $scope.vehicle.device.split(',')[0],
        uuid: $scope.vehicle.device.split(',')[1]
      };
      
      Fleets.addVehicle($scope.currentFleet, {vehicle: $scope.vehicle})
      .success(function(data) {
        $location.path('/fleets');
      })
      .error(function(data) {
        alert('Operation Failed');
      });
      
    };

    Fleets.getDevices($scope.currentFleet)
    .success(function(data) {
      $scope.devices = data.devices;
    })
    .error(function(data) {});
  });
