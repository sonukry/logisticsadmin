'use strict';

angular.module('angularPassportApp')
  .factory('Trips', function ($http) {
    var url = '/api/trips';
    
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
