'use strict';

angular.module('angularPassportApp')
  .controller('VehiclesCtrl', function ($scope, Fleets) {
    
    Fleets.get(['name', 'vehicles'])
    .success(function(data) {
      $scope.fleets = data;
    })
    .error(function(data) {}); 
    
  });
