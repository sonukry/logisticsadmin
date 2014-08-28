'use strict';

angular.module('angularPassportApp')
  .controller('TripsCtrl', function ($scope, Fleets) {
    
    Fleets.get(['name', 'trips'])
    .success(function(data) {
      $scope.fleets = data;
    })
    .error(function(data) {});    
    
  });
