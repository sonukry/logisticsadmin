'use strict';

angular.module('angularPassportApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'http-auth-interceptor',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/fleets', {
        templateUrl: 'partials/fleet/fleets.html',
        controller: 'FleetsCtrl'
      })
      .when('/vehicles', {
        templateUrl: 'partials/vehicle/vehicles.html',
        controller: 'VehiclesCtrl'
      })
      .when('/drivers', {
        templateUrl: 'partials/driver/drivers.html',
        controller: 'DriversCtrl'
      })
      .when('/trips', {
        templateUrl: 'partials/trip/trips.html',
        controller: 'TripsCtrl'
      })
      .when('/new/fleet', {
        templateUrl: 'partials/fleet/newFleet.html',
        controller: 'NewFleetCtrl'
      })
      .when('/new/vehicle', {
        templateUrl: 'partials/vehicle/newVehicle.html',
        controller: 'NewVehicleCtrl'
      })
      .when('/new/driver', {
        templateUrl: 'partials/driver/newDriver.html',
        controller: 'NewDriverCtrl'
      })
      .when('/new/trip', {
        templateUrl: 'partials/trip/newTrip.html',
        controller: 'NewTripCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  })

  .run(function ($rootScope, $location, Auth) {

    //watching the value of the currentUser variable.
    $rootScope.$watch('currentUser', function(currentUser) {
      // if no currentUser and on a page that requires authorization then try to update it
      // will trigger 401s if user does not have a valid session
      if (!currentUser && (['/', '/login', '/logout', '/signup'].indexOf($location.path()) == -1 )) {
        Auth.currentUser();
      }
    });

    // On catching 401 errors, redirect to the login page.
    $rootScope.$on('event:auth-loginRequired', function() {
      $location.path('/login');
      return false;
    });
  });