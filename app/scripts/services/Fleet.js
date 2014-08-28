'use strict';

angular.module('angularPassportApp')
  .factory('Fleets', function ($http) {
    var url = '/api/fleets';
    
    return {
      get: function (fields) {
        if (fields) {
          return $http.get(url, {
            params: { fields: fields.join(',') }
          });
        } else {
          return $http.get(url);
        }
      },
      getById: function (id) {
        return $http.get(url + '/' + id);
      },
      post: function (data) {
        return $http.post(url, data);
      },
      addDriver: function(id, data) {
        var url = '/api/fleets/' + id + '/drivers';
        return $http.post(url, data);
      },
      addVehicle: function(id, data) {
        var url = '/api/fleets/' + id + '/vehicles';
        return $http.post(url, data);
      },
      addTrip: function(id, data) {
        var url = '/api/fleets/' + id + '/trips';
        return $http.post(url, data);
      },
      getDrivers: function(id) {
        var url = '/api/fleets/' + id + '/drivers';
        return $http.get(url);
      },
      getVehicles: function(id) {
        var url = '/api/fleets/' + id + '/vehicles';
        return $http.get(url);
      },
      getTrips: function(id) {
        var url = '/api/fleets/' + id + '/trips';
        return $http.get(url);
      }
    };
  });
