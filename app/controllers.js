app.controller('BioController', function ($scope, $http) {

	$http.get('http://apis.is/cinema').success(function (data) {
		$scope.myndir = data.results;
	});
});