var app = angular.module("strains", ['ngRoute'])

	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/main', {
			templateUrl: 'main.html',
			controller:  'MainCtrl'
		}).when('/about', {
			templateUrl: 'about.html',
			controller:  'MainCtrl'
		}).when('/strains', {
			templateUrl: 'strains.html',
			controller:  'StrainsCtrl'
		}).when('/contact', {
			templateUrl: 'main.html'
		}).otherwise({ redirectTo: '/main' })
	}])

	.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('https://secure-scrubland-75502.herokuapp.com/')
			.then(res => {
				$scope.main = res.data
			})
	}])

	.controller('StrainsCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('https://secure-scrubland-75502.herokuapp.com/').then(function (response) {
			console.log('weeeeeeeeeeeee')
			$scope.strains = response.data;
		});
	}])

