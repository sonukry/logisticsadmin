'use strict';

angular.module('angularPassportApp')
  .controller('NewDeviceCtrl', function ($scope, $location, $cookieStore, Fleets) {
    
    $scope.device = {};
    
    $scope.createDevice = function() {
      
      Fleets.addDevice($scope.currentFleet, {device: $scope.device})
      .success(function(data) {
        $location.path('/fleets');
      })
      .error(function(data) {
        alert('Operation Failed');
      });
      
    };
    
    $scope.currentFleet = $cookieStore.get('fleetId');
    $scope.currentFleetName = $cookieStore.get('fleetName');    
  });
