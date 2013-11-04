APP.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('/api/produtos').success(function(data, status, headers, config) {
		$scope.produtos = data;
	});
}]);