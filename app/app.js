var app = angular.module('bioApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'BioController',
			templateUrl: 'app/partials/myndalisti.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});