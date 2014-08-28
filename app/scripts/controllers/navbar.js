'use strict';

angular.module('angularPassportApp')
  .controller('NavbarCtrl', function ($scope, Auth, $location) {
//    $scope.menu = [{
//      "title": "Blogs",
//      "link": "blogs"
//    }];

    $scope.authMenu = [{
      "title": "Fleets",
      "link": "fleets"
    }, {
      "title": "Vehicles",
      "link": "vehicles"
    }, {
      "title": "Drivers",
      "link": "drivers"
    }, {
      "title": "Trips",
      "link": "trips"
    }];

    $scope.logout = function() {
      Auth.logout(function(err) {
        if(!err) {
          $location.path('/login');
        }
      });
    };
  });
