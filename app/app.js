var app = angular.module('TruckYourMouth', ['ngRoute'])

.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'index.html'
		})
		.when('/home', {
			templateUrl: 'views/home.html'
		})
		.when('/about', {
			templateUrl: 'views/about.hmtl'
		})
		.otherwise({
			redirectTo: '/'
		});
});