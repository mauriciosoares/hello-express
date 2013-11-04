/**
* app Module
*
* An AngularJS app using express and mongodb
*/
'use strict';

var APP = angular.module('app', ['ngRoute']);

APP.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'HomeCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});

	// $locationProvider.html5Mode(true);
}]);