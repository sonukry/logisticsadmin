'use strict';

angular.module('angularPassportApp')
  .controller('DriversCtrl', function ($scope, Fleets) {
    
    Fleets.get(['name', 'drivers'])
    .success(function(data) {
      $scope.fleets = data;
    })
    .error(function(data) {});    
    
  });
