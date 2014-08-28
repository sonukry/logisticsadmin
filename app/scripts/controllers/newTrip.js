'use strict';

angular.module('angularPassportApp')
  .controller('NewTripCtrl', function ($scope, $location, $cookieStore, Fleets) {
    
    $scope.trip = {};
    
    $scope.createTrip = function() {
      
      $scope.trip.vehicle = {
        _id: $scope.trip.vehicle.split(',')[0],
        registrationNumber: $scope.trip.vehicle.split(',')[1]
      };
      
      $scope.trip.driver = {
        _id: $scope.trip.driver.split(',')[0],
        name: $scope.trip.driver.split(',')[1]
      };
      
      Fleets.addTrip($scope.currentFleet, {trip: $scope.trip})
      .success(function(data) {
        $location.path('/fleets');
      })
      .error(function(data) {
        alert('Operation Failed');
      });
      
    };
    
    $scope.currentFleet = $cookieStore.get('fleetId');
    $scope.currentFleetName = $cookieStore.get('fleetName');
    
    Fleets.getVehicles($scope.currentFleet)
    .success(function(data) {
      $scope.vehicles = data.vehicles;
    })
    .error(function(data) {});
    
    Fleets.getDrivers($scope.currentFleet)
    .success(function(data) {
      $scope.drivers = data.drivers;
    })
    .error(function(data) {});
        
  });
