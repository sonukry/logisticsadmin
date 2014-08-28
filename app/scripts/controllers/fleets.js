'use strict';

angular.module('angularPassportApp')
  .controller('FleetsCtrl', function ($scope, $cookieStore, Fleets) {
    
    $scope.setFleet = function(id, name) {
      $cookieStore.put('fleetId', id);
      $cookieStore.put('fleetName', name);
    }
    
    Fleets.get()
    .success(function(data) {
      $scope.fleets = data;
    })
    .error(function(data) {});    
    
    
  });
