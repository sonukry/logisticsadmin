'use strict';

angular.module('angularPassportApp')
  .controller('DevicesCtrl', function ($scope, Fleets) {
    
    Fleets.get(['name', 'devices'])
    .success(function(data) {
      $scope.fleets = data;
    })
    .error(function(data) {}); 
    
  });
