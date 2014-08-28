'use strict';

angular.module('angularPassportApp')
  .factory('Vehicles', function ($http) {
    var url = '/api/vehicles';
    
    return {
      get: function () {
        return $http.get(url);
      },
      getById: function (id) {
        return $http.get(url + '/' + id);
      },
      post: function (data) {
        return $http.post(url, data);
      }
    };
  });
