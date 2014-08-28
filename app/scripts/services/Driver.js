'use strict';

angular.module('angularPassportApp')
  .factory('Drivers', function ($http) {
    var url = '/api/drivers';
    
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
